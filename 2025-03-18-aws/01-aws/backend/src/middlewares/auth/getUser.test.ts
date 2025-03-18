import { Request, Response } from "express"
import authJwt from "./getUser"
import AppError from "../../errors/app-error"
import status from "http-status"
import { sign } from "jsonwebtoken"
import config from "config"

describe("getUser middlewares tests", () => {
    // test("calls next with a 401 error when no authorization header is provided", () => {
    //     const request = { headers: {} } as Request
    //     const response = {} as Response
    //     const next = jest.fn((err) => {})

    //     authJwt(request, response, next)

    //     expect(next.mock.calls.length).toBe(1)
    //     expect(next.mock.calls[0][0]).toEqual(new AppError(status.UNAUTHORIZED, "Missing authorization header"))
    // })

    // test("calls next with a 401 error when no space between Bearer and token", () => {
    //     const request = { headers: {
    //         authorization: "Bearer123"
    //     } } as Request
    //     const response = {} as Response
    //     const next = jest.fn((err) => {})

    //     authJwt(request, response, next)

    //     expect(next.mock.calls.length).toBe(1)
    //     expect(next.mock.calls[0][0]).toEqual(new AppError(status.UNAUTHORIZED, "Bad authorization header"))
    // })

    // test("calls next with a 401 error when Bearer keyword is misspelled", () => {
    //     const request = { headers: {
    //         authorization: "Beaerer 123"
    //     } } as Request
    //     const response = {} as Response
    //     const next = jest.fn((err) => {})

    //     authJwt(request, response, next)

    //     expect(next.mock.calls.length).toBe(1)
    //     expect(next.mock.calls[0][0]).toEqual(new AppError(status.UNAUTHORIZED, "Bad authorization header"))
    // })

    test("success when all is valid", () => {
        const jwt = sign({}, config.get<string>('app.jwtSecret'))
        const request = {
            headers: {
                authorization: `Bearer ${jwt}`
            }
        } as Request
        const response = {} as Response
        const next = jest.fn((err) => { })

        authJwt(request, response, next)

        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toBeUndefined()
    })
})