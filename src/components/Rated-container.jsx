import { Card } from "./Card";
let arr = ['Rated 5 Stars in Reviews','Rated 5 Stars in Report Guru','Rated 5 Stars in BestTech'];

export const RatedContainer = () => {
    return(
        <section className="rating"> 
            {
                arr.map(element => {
                    return(
                        <Card text={element} key={element}/>
                    )
                })
            }
        </section>
    )
}
