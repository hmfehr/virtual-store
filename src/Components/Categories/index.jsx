import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategory } from '../../store/actions';
import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'axios';


const Categories = (props) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.category);

  useEffect(()=> {
    dispatch(getCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};



export default Categories;