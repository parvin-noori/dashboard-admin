import React from 'react'
import logo from '@assets/images/logo.svg'

export default function Register() {
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          {/* <Link to="/login" className="me-2">
            وارد شوید{" "}
          </Link> */}
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input
                  className="form-control form-control-lg"/>
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  type="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input

                  className="form-control form-control-lg"
                  type="password"
                />
         
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
