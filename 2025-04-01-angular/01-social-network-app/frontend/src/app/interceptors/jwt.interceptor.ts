import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJ1c2VybmFtZSI6ImFsaWNlMCIsInBhc3N3b3JkIjoiN2Y3NzM3ZmRkZDI4NDJiYzJhZmRiZjE4NjhhYWE4ZTk4NmI4MzEzM2ExZjAxMGZlOTY1MzVjMTVlNDU4NDYyOCIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMjVUMTE6MTQ6MzkuNDAzWiIsImZvbGxvd2luZyI6WyI2N2UyNzEyMTgyOTM5Njg3M2JiZTEyM2YiXSwiaWQiOiI2N2UyOTAxZmU2NDE5NjdjM2U4NzNmZmMiLCJpYXQiOjE3NDM0MDg5MzN9.VZvQGE66fLLoQJ41YiaS8K6gC2zjiVIflwquKWSE9X4"
  
  const reqWithJwt = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${jwt}`)
  })

  return next(reqWithJwt);
};
