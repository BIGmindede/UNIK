import { Link } from "react-router-dom"
import cls from "./NotFoundPage.module.scss"

export default () => {

    return (
        <div className={cls.notfoundpage}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    )
}