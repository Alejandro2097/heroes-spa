import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if(!hero){
    return <Navigate to="/marvel"/>;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${ id }.jpg`}
          alt={hero.superhero} 
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item"><b>Alter ego: {hero.alter_ego}</b></li>
          <li className="list-group-item"><b>Publisher: {hero.publisher}</b></li>
          <li className="list-group-item"><b>First appearance: {hero.first_appearance}</b></li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
      </div>
    </div>
  )
}
