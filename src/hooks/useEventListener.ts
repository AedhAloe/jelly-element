import { onMounted, onBeforeMount,isRef,watch,unref } from "vue";
import type { Ref } from 'vue'
export default function useEventListener(
    target: Ref<EventTarget | null> | EventTarget,
    event: string,
    handler: (e: Event) => any
) {
    if(isRef(target)){
    watch(target,(value,oldValue)=>{
        oldValue?.removeEventListener(event,handler)
        value?.addEventListener(event,handler)
    })
}else{
    onMounted(() => {
        target.addEventListener(event, handler)
    })
}
onBeforeMount(() => {
    unref(target)?.removeEventListener(event, handler)
    //unref:如果target是ref，返回值；否则返回本身
})
}