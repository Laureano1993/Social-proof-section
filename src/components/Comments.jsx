import { Comment } from "./Comment"
import coltonImg from '../assets/images/image-colton.jpg';
import ireneImg from '../assets/images/image-irene.jpg';
import anneImg from '../assets/images/image-anne.jpg';

const peopleArr = [
    {
        name : 'Colton Smith',
        job: 'Verified Buyer',
        description : '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
        img : coltonImg
    },
    {
        name : 'Irene Roberts',
        job: 'Verified Buyer',
        description : '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
        img : ireneImg
    },
    {
        name : 'Anne Wallace',
        job: 'Verified Buyer',
        description : '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
        img : anneImg
    }
]


export const Comments = () => {
  return (
    <div className="comments">
        {
            peopleArr.map(person => {
                return(
                    <Comment name={person.name} job={person.job} description={person.description} img={person.img} />
                )
            })
        }
    </div>
    
  )
}
