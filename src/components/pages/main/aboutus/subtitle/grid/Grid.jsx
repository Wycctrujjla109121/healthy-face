import React from 'react';

//  STYLES
import style from './grid.module.scss'

const grid = () => {
    return (
        <div className={style.grid}>
            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Восстанавливает кожу</h3>
                <p className={style.grid__desc}>Благодаря новой и эффективной формуле, спрей восстанавливает утраченное сияние и цвет вашей коже. А также возвращает эластичность и мягкость</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Увлажняют лицо</h3>
                <p className={style.grid__desc}>Повышают содержание веществ, обеспечивающих гладкость и увлажнение кожного покрова. Это положительно сказывается на внешнем виде лица.</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Регуляция процессов</h3>
                <p className={style.grid__desc}>Определенные элементы в составе образуют защитный слой и регенерируют кожу, Придают ей лица более подтянутый и свежий вид.</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Очищает поры</h3>
                <p className={style.grid__desc}>Спрей очищает лицо от загрязнений и жизнедеятельности клеток. Увлажняет верхние, средние и глубинные слои. Питает эпидермис.</p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Улучшает состояние кожи</h3>
                <p className={style.grid__desc}>Стабилизируют водный баланс кожи. Придают лицу естественный здоровый оттенок. </p>
            </div>

            <div className={style.grid__block}>
                <h3 className={style.grid__title}>Обеспечивает питание лица</h3>
                <p className={style.grid__desc}>Спреи пидают дерму необходимыми для жизнедеятельности веществами</p>
            </div>
        </div>
    );
};

export default grid;