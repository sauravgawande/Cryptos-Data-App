import React from 'react'
import {Row,Col, Container,Table} from 'react-bootstrap';

function TableComponent({data}) {
    
  return (
    <div>
        <Container >
                  <Row  id='c1'  className='mt-3 '>
                      {data.map((colElement, colIndex) => (
                          <Col key={colIndex}  >
                              <Table  variant="dark">
                                  
                                  <tbody>
                                      <tr>
                                          <td id='d1'><img src={colElement.image} height='50px'/></td>
                                          <td id='d2' >{colElement.name}</td>
                                          <td id='d3'>{colElement.symbol.toUpperCase()}</td>
                                          <td id='d4'>${colElement.current_price}</td>
                                          <td id='d5'  >{colElement.price_change_percentage_24h}% </td>
                                          <td id='d6'>Mkt Cap : ${colElement.market_cap} </td>
                                          <td id='d7'>Volume : ${colElement.total_volume}</td>
                                      </tr>
                                     
                                  </tbody>
                              </Table>
                          </Col>
                      ))}

                  </Row>
                  </Container>
    </div>
  )
}

export default TableComponent