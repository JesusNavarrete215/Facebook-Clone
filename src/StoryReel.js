import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div>
            <div className='storyReel'>

               < Story image='https://images1.calcalist.co.il/PicServer3/2020/01/23/964198/17_lm.jpg' profileSrc='https://avatars2.githubusercontent.com/u/24712956' title='Sonny Sangha'/>
               < Story image='https://static.onecms.io/wp-content/uploads/sites/28/2021/02/19/new-york-city-evening-NYCTG0221.jpg' profileSrc='https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_mas_hlf_02_0.jpg' title='Bruce Banner'/>
               < Story image='https://i1.wp.com/www.elikarealestate.com/blog/wp-content/uploads/2020/01/queens-ny.jpeg?fit=1920%2C1280&ssl=1' profileSrc='https://i.redd.it/9n8tsdmrikry.jpg' title='Peter Parker'/>
               < Story image='http://pm1.narvii.com/7132/b9c52395cda7ed6537142ebbb765355e4dbfd21br1-1200-545v2_uhq.jpg' profileSrc='https://static.displate.com/280x392/displate/2020-04-13/daff3aecf8347bb661bdcecdd11c6673_4802027cf0e024b808e6882802d2408b.jpg' title='Vegita'/>
               < Story image='https://static.displate.com/857x1200/displate/2020-02-26/21c4ae7e426f5f6c9fa23c562a89ca00_950033389d1d398cd57bbfe3e4b7f19c.jpg' profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxia80e4V9Tj1PEk1H7kkui8kZNAnkhxKlXA&usqp=CAU' title='Kakarot'/>

            </div>

        </div>
    )
}

export default StoryReel
