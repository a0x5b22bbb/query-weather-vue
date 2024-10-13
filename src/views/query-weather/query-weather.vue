<template>
    <div>
        <div class="card">
            <DataTable
                ref="dt"
                v-model:selection="selectedProducts"
                :value="products"
                dataKey="id"
                :paginator="true"
                :rows="10"
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            >
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0"> 一分钟内 连点超过5次 会触发 "too many requests error" </h4>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                 <Column field="location_id" header="locationID" sortable style="min-width: 12rem"></Column>
                <Column field="city_name_ZH" header="city_name" sortable style="min-width: 16rem"></Column>
                
                <Column field="Adm1_Name_ZH" header="所在省" sortable style="min-width: 12rem">
                </Column>
                <Column field="Adm2_Name_ZH" header="所在市" sortable style="min-width: 12rem"></Column>
 
                <Column :exportable="false" style="min-width: 12rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-search" outlined rounded class="mr-2" @click="queryCityWeather(slotProps.data)" />
                     </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="城市天气详情" :modal="true">
            <div class="flex flex-col gap-6">
                <!-- <img v-if="product.image" :src="`https://primefaces.org/cdn/primevue/images/product/${product.image}`" :alt="product.image" class="block m-auto pb-4" /> -->
                <div>
                    <label for="name" class="block font-bold mb-3">City Name : {{ product.city_name_ZH }}</label>
                </div>
                <div>
                    
                </div>
                <template v-if="loading_flag">
                    <Skeleton width="100%" height="2rem" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                    <Skeleton width="100%" height="2rem" style="margin-top: 1rem;" />
                </template>

                <template v-else>
                    <!-- <p>Location ID: {{ locationId }}</p>
                    <p>Weather: {{ weatherData.weather }}</p> -->
                    <label for="description" class="block font-bold mb-3"><a href="https://www.primefaces.org/primevue/" target="{{ product.fxLink }}">天气详情(点我查看)</a></label>
                    
                    <div>
                    <label for="name" class="block font-bold mb-3">体感温度 : {{query_result.now.feelsLike}}</label>
                    </div>
                    
                    <div>
                        <label for="name" class="block font-bold mb-3">天气 : {{query_result.now.text}}</label>
                    </div>

                    <div>
                        <label for="name" class="block font-bold mb-3">体感温度 : {{query_result.now.feelsLike}}</label>
                    </div>

                    <div>
                        <label for="name" class="block font-bold mb-3">相对湿度 : {{query_result.now.humidity}}%</label>
                    </div>

                    <div>
                        <label for="name" class="block font-bold mb-3">露点温度 : {{query_result.now.dew}}</label>
                    </div>

                    <div>
                        <label for="name" class="block font-bold mb-3">体感温度 : {{query_result.now.feelsLike}}</label>
                    </div>

                    <div>
                        <label for="name" class="block font-bold mb-3">能见度 : {{query_result.now.vis}}公里</label>
                    </div>
                    <Button label="Close" @click="productDialog = false" />
                </template>
             
            </div>
        </Dialog>

 
    </div>
</template>

<script setup>
import { CityNameLocationIDMappings } from '@/service/CityNameLocationIDMappings';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { getCurrentInstance, onMounted, ref } from 'vue';

onMounted(() => {
    CityNameLocationIDMappings.getCityNameLocationIDMappings().then((data) => (products.value = data));
});
const { proxy } = getCurrentInstance();

const dt = ref();
const products = ref();
const toast = useToast()
const productDialog = ref(false);
const product = ref({});
const query_result = ref({})
const selectedProducts = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
 
function openNew() {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
}

function hideDialog() {
    productDialog.value = false;
    submitted.value = false;
}


const loading_flag = ref(true)
const fetchData = (location_id) => {
  const url = `/weather?location_id=${location_id}&_=${new Date().getTime()}`; // 使用相对路径
  const method = 'GET'; // 请求方法
  const data = null; // GET 请求不需要数据
  const async = true; // 异步请求
  
  loading_flag.value = true
  proxy.$http(url, method, data, async, (response) => {
    console.log(response);
    loading_flag.value = false
    query_result.value = response
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data fetched successfully', life: 3000 });
  });
};

function queryCityWeather(prod) {
    product.value = { ...prod };
    productDialog.value = true;
    fetchData(prod.location_id)
    
}

function findIndexById(id) {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
}


</script>
