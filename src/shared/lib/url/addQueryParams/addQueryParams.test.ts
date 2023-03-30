import { getQueryParams } from "./addQueryParams"

describe('shared/url/addQueryParams', function() {
    test('test with one param', () => {
        const params =  getQueryParams({
            test: 'value'
        })
        expect(params).toBe('?test=value')
    })

    test('test with two params', () => {
        const params =  getQueryParams({
            test: 'value',
            test2: 'value2'
        })
        expect(params).toBe('?test=value&test2=value2')
    })
    test('test with undefined param', () => {
        const params =  getQueryParams({
            test: undefined
        })
        expect(params).toBe('?')
    })
})