import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { computed, ComputedRef, onMounted, Ref, ref } from 'vue';

export interface UseAxiosOptions<P, C> {
  defaultParams?: P;
  instance?: AxiosInstance;
  config?: C;
  immediate?: boolean;
}

export interface UseAxiosReturns<T, P, C> {
  data: ComputedRef<T | undefined>;
  axiosRes: ComputedRef<AxiosResponse<T> | undefined>;
  error: ComputedRef<AxiosError<T, C> | undefined>;
  loading: ComputedRef<boolean>;
  setParams: (p: P) => void;
  request: (p?: P, overwrite?: boolean) => void;
}

export const useAxios = <T = any, P = any, C = any>(
  options: UseAxiosOptions<P, AxiosRequestConfig<C>> = {},
): UseAxiosReturns<T, P, C> => {
  const {
    config = {},
    instance: axiosInstance = axios.create(config),
    immediate = true,
  } = options;

  config.method || (config.method = 'GET');

  const _data = ref<T>();
  const data = computed(() => _data.value);

  const _axiosRes = ref<AxiosResponse<T>>();
  const axiosRes = computed(() => _axiosRes.value);

  const _loading = ref(false);
  const loading = computed(() => _loading.value);

  const params = ref<P | undefined>(options.defaultParams);
  const setParams = (nParams: P) => ((params.value as P) = nParams);

  const _error = ref<AxiosError<T, C>>();
  const error = computed(() => _error.value);

  const request = async (p?: P, overwrite: boolean = false) => {
    const _params = overwrite ? p : { ...(params.value || {}), ...(p || {}) };
    _loading.value = true;
    try {
      const res = await axiosInstance.request<T>({
        ...config,
        ...(config.method === 'GET' ? { params: _params } : { data: _params }),
      });
      _data.value = res.data;
      _axiosRes.value = res;
      _error.value = undefined;
    } catch (err: any) {
      _error.value = err;
      _axiosRes.value = err;
    } finally {
      _loading.value = false;
    }
  };

  if (immediate) {
    onMounted(request);
  }

  return {
    data,
    error,
    axiosRes,
    loading,
    setParams,
    request,
  };
};
