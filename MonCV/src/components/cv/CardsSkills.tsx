import data from "../../data/data.json"
import {starsRating} from "../../Services/starsRating.tsx"

const CardSkill = () => {
  return (
    <div className="flex flex-col mx-auto">
      <ul className="flex flex-col justify-center">
        {data.skills.map((skills) => (
          <li key={skills.id} className="flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center"> {skills.name} :
              <div className="flex justify-center items-center gap-2">
                {starsRating({stars: skills.stars})}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardSkill
