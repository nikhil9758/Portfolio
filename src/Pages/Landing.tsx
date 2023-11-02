import React, { useRef } from 'react'
import Sections from '../Components/Sections'
import {useOutletContext} from 'react-router-dom'

const Landing = () => {
    const props: any =useOutletContext<{context:any}>()
  return (
    <div>
        <Sections id='contact' ref={props.contact}>
            <div className='text-3xl'> Contact us page</div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, suscipit molestiae inventore alias tempora officiis quidem asperiores sequi eligendi qui cupiditate neque rerum. Ipsum minima laudantium suscipit mollitia laborum, iure voluptates ut omnis neque asperiores ab ad ullam, atque facere praesentium at doloribus beatae facilis sapiente dolor dolorem ipsa. Doloribus, id. Minus quasi ipsam, quas nisi non nobis? Accusantium dolores veniam ex ducimus laborum et. Vero cupiditate quidem quisquam amet vel fugiat, assumenda placeat non unde iste eaque inventore nemo rem expedita fugit numquam enim cum! Eos dolore omnis ex quidem cumque inventore, tenetur mollitia doloremque ratione, veniam beatae at?
        </Sections>
        <Sections id='work' ref={props.work}>
          <div className='text-3xl'> Work Emperience</div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, libero voluptas dolorem, non sequi fugit sed quasi minima officiis dolor enim odit debitis quas eius dolorum ratione culpa quo illum iure eos accusamus amet? Rerum perferendis voluptate totam fugiat autem veritatis facilis corporis! Consequatur eius, recusandae accusamus magnam dolorem, eum quis voluptates dicta vitae perferendis eos? Amet nesciunt quae ex sint pariatur, assumenda consequatur? Ad, eius similique et impedit sunt beatae repellendus veniam dolore dolorum, ducimus laborum fugit. Ipsa ut, ea quam, ipsam accusantium in sint voluptas suscipit odio optio possimus facere! Earum soluta quibusdam laboriosam error incidunt reprehenderit sequi nam necessitatibus, eius debitis dignissimos odit? Corrupti asperiores, labore hic ut repellat quaerat velit eligendi reiciendis illum cum, aliquid pariatur. Magnam tempora voluptate totam ullam amet culpa deserunt nobis, perferendis debitis unde ducimus distinctio incidunt qui enim quas eaque eligendi quia earum sunt facere saepe, laboriosam cumque? Soluta ipsum iure perferendis? Autem iusto tenetur quod, perspiciatis repellendus reiciendis fugiat reprehenderit asperiores officiis quaerat ipsa ipsum modi vero nam optio! Pariatur aut ipsam maiores, sit distinctio aspernatur? Officia ipsum perferendis facilis atque quae vero deleniti? Similique vel omnis reiciendis, et nisi, perspiciatis fuga optio repellat hic aspernatur ipsa adipisci voluptatem molestias.
        </Sections>
        <Sections id='skills' ref={props.skills}>
            <div className='text-3xl'>Skills</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at sit nesciunt quidem, quasi impedit quam commodi omnis ad quos iure, quae expedita aspernatur porro repellendus id nemo laudantium ratione beatae. Dolores minus unde omnis quod, architecto cum laborum recusandae in aut ullam error? Ratione architecto porro debitis, blanditiis aliquid aspernatur, sunt quisquam laboriosam quos odio nesciunt ad in ab sequi sint vitae commodi illo! Beatae nihil nam consectetur, vitae, nulla eaque repudiandae dicta velit, quibusdam incidunt itaque alias ratione voluptas atque modi? Possimus cupiditate dolorum facere modi voluptatum ex ipsum ullam, doloribus molestiae nesciunt, et corrupti reiciendis obcaecati autem.
        </Sections>
    </div>
  )
}

export default Landing