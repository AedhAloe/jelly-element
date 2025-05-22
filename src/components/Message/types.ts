import type {VNode,ComponentInternalInstance } from 'vue';
export type MessageProps = {
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
    duration?: number;
    showClose?: boolean;
    onClose?: () => void;
    onDestroy?: () => void;
    offset?: number;
    id:string;
    zIndex:number;
    transitionName?:string;
}
export interface MessageContext {
    id: string;
    vnode: VNode;
    props: MessageProps;
    vm: ComponentInternalInstance;
    destroy: ()=>void;
}
export type CreateMessageProps = Omit<MessageProps,'onDestroy'|'id'|'zIndex'>
