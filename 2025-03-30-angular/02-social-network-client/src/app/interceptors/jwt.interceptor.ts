import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQm9iIiwidXNlcm5hbWUiOiJib2IwMDAiLCJwYXNzd29yZCI6IjdmNzczN2ZkZGQyODQyYmMyYWZkYmYxODY4YWFhOGU5ODZiODMxMzNhMWYwMTBmZTk2NTM1YzE1ZTQ1ODQ2MjgiLCJjcmVhdGVkQXQiOiIyMDI1LTAzLTI1VDA5OjAyOjI1LjExN1oiLCJmb2xsb3dpbmciOltdLCJpZCI6IjY3ZTI3MTIxODI5Mzk2ODczYmJlMTIzZiIsImlhdCI6MTc0MzMzNDM0NH0.1ksCJwFbS1-9OLZHjlyM8BXbrxzEaW9OJXpcjcRM8b0"
  
  const reqWithJwt = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${jwt}`)
  })

  return next(reqWithJwt);
};
