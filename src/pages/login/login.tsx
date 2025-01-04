import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { AuthDataType } from "../../types/auth-data";
import { authLogin } from "../../redux-store/api-actions";
import { Link, redirect } from "react-router-dom";

export function Login(){
    const dispatch = useAppDispatch();
    const city = useAppSelector((state) => state.city)
    const [authInfo, setAuthInfo] = useState<AuthDataType>({email: '', password: ''});
    const changeAuthInfo = (event: React.ChangeEvent<HTMLInputElement>) => 
      setAuthInfo((auth) => ({ ...auth, [event.target.name]: event.target.value }));

    const submit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      if (authInfo.email.length > 0 && authInfo.password.length > 0) {
        dispatch(authLogin({
          email: authInfo.email,
          password: authInfo.password
        }));
      }
      redirect('/')
    };

    return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={submit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input value={authInfo.email} onChange={changeAuthInfo} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input value={authInfo.password} onChange={changeAuthInfo} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
    )
}