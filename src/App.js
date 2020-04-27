import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Items from './components/Items'
import PaginationHandler from './navigation/paginationHandler'
import IconCredits from './components/IconCredits';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100');
      setItems(res.data.items);
      setLoading(false);
    }

    fetchItems();
  }, []);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem)

    //Style active page-link
    const stylePageLink = (activeLink) =>{
      let a = document.getElementsByTagName('a');

      for (var i = 0; i < a.length; i++){
        a[i].className = 'item-link';
      }

      a[activeLink].className = 'current';
    }

    //Change page
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      stylePageLink(pageNumber)
    }

    // Prev
    const goBack = () => {
      if (currentPage <= 1){
        setCurrentPage(1)
      }else{
        setCurrentPage(currentPage - 1)
        stylePageLink(currentPage - 1)
      }
    }
    // Next
    const goNext = () => {
      if(currentPage >= items.length / itemsPerPage){
        setCurrentPage(items.length / itemsPerPage)
      }else{
        setCurrentPage(currentPage + 1);
        stylePageLink(currentPage + 1)
      }
    }

    return(
      <div className="page-wrapper">
        <div className="header">
          <h1>Github Repos</h1>
          <p>A library of the most popular repositories on GitHub</p>
        </div>
        <PaginationHandler itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} goBack={goBack} goNext={goNext}/>
        <Items items={currentItem} loading={loading}/>
        <IconCredits />
      </div>
    )
}

export default App;
