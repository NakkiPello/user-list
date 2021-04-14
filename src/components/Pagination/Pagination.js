import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationElement = ({ onClick, activePage, pages  }) => {

  let active = activePage;
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item key={number} onClick={onClick} data-name="page-number" data-page={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination style={{marginBottom: '15px', justifyContent: 'center'}}>
      { activePage !== 1
        ? <Pagination.Prev onClick={onClick} data-name="prev"/>
        : <Pagination.Prev onClick={onClick} disabled data-name="prev"/>
      }

      {items}
      { pages !== activePage
        ? <Pagination.Next onClick={onClick} data-name="next"/>
        : <Pagination.Next onClick={onClick} disabled data-name="next"/>
      }
    </Pagination>

  )
}

export default PaginationElement;
