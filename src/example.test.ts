import { describe, test, vi, expect, type Mocked } from 'vitest'
import { testFn, request } from './utils'
import axios from 'axios'

vi.mock('axios')
const mockedAxios = axios as Mocked<typeof axios>
//类型断言，让 TypeScript 将模拟后的 axios 识别为携带了 Vitest 模拟函数类型的对象
describe('functions', () => {
    test('create a mock function', () => {
        const callback = vi.fn()
        testFn(12, callback)
        expect(callback).toHaveBeenCalled()
        expect(callback).toHaveBeenCalledWith(12)
    })

    test('spy on method', () => {//监控对象上的一个方法
        const obj = {
            getName: () => 1
        }
        const spy = vi.spyOn(obj, 'getName')
        obj.getName()
        expect(spy).toHaveBeenCalled()
        obj.getName()
        expect(spy).toHaveBeenCalledTimes(2)
    })
    test('mock third party module', async () => {
        mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 123 }));
        const result = await request();
        expect(result).toBe(123);
    })
})