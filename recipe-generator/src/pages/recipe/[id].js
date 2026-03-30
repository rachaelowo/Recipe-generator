import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';

const RecipePage = () => {
  const { query } = useRouter();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (query.id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals) {
            setRecipe(data.meals[0]);
          }
        });
    }
  }, [query.id]);

  return (
    <div>
      <Navbar />
  );
};

export default RecipePage;
