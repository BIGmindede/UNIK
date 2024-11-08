import React from 'react'
import classes from './CompanyInfo.module.css'

const CompanyInfo = () => {
  return (
    <div className={classes.info}>
        <h2>О компании</h2>
        <p>РентАвто (RentAuto) - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nobis exercitationem officia sint maxime magnam aut perspiciatis, illo, adipisci ut omnis ex! Unde inventore quidem placeat tempore officia praesentium vero.</p>
        <h2>Эксперты в деле</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ratione fugiat quis est vel qui tempora vero quaerat accusamus asperiores sit in optio voluptas illo, nam voluptatibus voluptatum alias repellendus.</p>
        <h2>Наша миссия</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas unde eaque deleniti earum, cum, dignissimos numquam expedita asperiores quos saepe esse, fuga ipsa nemo aliquid. Blanditiis ad ipsa magnam?</p>
        <p><b>Наша работа позволяет решать такие важные задачи для бизнеса:</b></p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae dolorum distinctio ad, nostrum debitis eius eos, aut nulla voluptas, numquam necessitatibus eveniet delectus. Consequuntur hic ullam beatae iusto quam consectetur?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat corrupti recusandae porro ea praesentium sequi veritatis totam. Similique inventore neque nam laudantium distinctio! Possimus enim necessitatibus labore facilis!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam repudiandae veritatis voluptatibus placeat doloremque tempora officia commodi ullam laudantium enim veniam, voluptatum perferendis vitae, id recusandae voluptatem quos fugit.</li>
        </ul>
    </div>
  )
}

export default CompanyInfo