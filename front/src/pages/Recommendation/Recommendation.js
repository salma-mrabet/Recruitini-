import React from 'react'
import './rowdetails.css'
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";

export default function Recommendation(props) {
    

    return (
      <div className="Container">
        <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
<main class="st_viewport">
  <div class="st_wrap_table" data-table_id="0">
    <header class="st_table_header">
      <h2>title 1</h2>
      <div class="st_row">
        <div class="st_column _rank">Job title</div>
        <div class="st_column _name">company</div>
        <div class="st_column _surname">description</div>
        <div class="st_column _year">skills</div>
        <div class="st_column _section">location</div>
      </div>
    </header>
    <div class="st_table">
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">John</div>
        <div class="st_column _surname">Doe</div>
        <div class="st_column _year">1973</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Max</div>
        <div class="st_column _surname">Luke</div>
        <div class="st_column _year">1971</div>
        <div class="st_column _section">USA</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Kunze</div>
        <div class="st_column _year">2015</div>
        <div class="st_column _section">Germany</div>
      </div>
   
    </div>
  </div>
  <div class="st_wrap_table" data-table_id="1">
    <header class="st_table_header">
      <h2>title 2</h2>
      <div class="st_row">
      <div class="st_column _rank">Job title</div>
        <div class="st_column _name">company</div>
        <div class="st_column _surname">description</div>
        <div class="st_column _year">skills</div>
        <div class="st_column _section">location</div>
      </div>
    </header>
    <div class="st_table">
     
      
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Lena</div>
        <div class="st_column _surname">Eifel</div>
        <div class="st_column _year">1996</div>
        <div class="st_column _section">Germany</div>
      </div>
      
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Nacht</div>
        <div class="st_column _year">1968</div>
        <div class="st_column _section">Swiss</div>
      </div>
      
      
    </div>
  </div>
  <div class="st_wrap_table" data-table_id="2">
    <header class="st_table_header">
      <h2>title 3</h2>
      <div class="st_row">
      <div class="st_column _rank">Job title</div>
        <div class="st_column _name">company</div>
        <div class="st_column _surname">description</div>
        <div class="st_column _year">skills</div>
        <div class="st_column _section">location</div>
      </div>
    </header>
    <div class="st_table">
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Vanessa</div>
        <div class="st_column _surname">Schneider</div>
        <div class="st_column _year">2004</div>
        <div class="st_column _section">Russia</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">laura</div>
        <div class="st_column _surname">Beike</div>
        <div class="st_column _year">1952</div>
        <div class="st_column _section">Sweden</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">John</div>
        <div class="st_column _surname">Doe</div>
        <div class="st_column _year">1973</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Max</div>
        <div class="st_column _surname">Luke</div>
        <div class="st_column _year">1971</div>
        <div class="st_column _section">USA</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Kunze</div>
        <div class="st_column _year">2015</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Janina</div>
        <div class="st_column _surname">Endres</div>
        <div class="st_column _year">1955</div>
        <div class="st_column _section">Belgium</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Lena</div>
        <div class="st_column _surname">Eifel</div>
        <div class="st_column _year">1996</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Nacht</div>
        <div class="st_column _year">1968</div>
        <div class="st_column _section">Swiss</div>
      </div>
    </div>
  </div>
  <div class="st_wrap_table" data-table_id="3">
    <header class="st_table_header">
      <h2>Native STICKY</h2>
      <div class="st_row">
        <div class="st_column _rank">Rank</div>
        <div class="st_column _name">Name</div>
        <div class="st_column _surname">Surname</div>
        <div class="st_column _year">Year</div>
        <div class="st_column _section">Section</div>
      </div>
    </header>
    <div class="st_table">
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">John</div>
        <div class="st_column _surname">Doe</div>
        <div class="st_column _year">1973</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Lena</div>
        <div class="st_column _surname">Eifel</div>
        <div class="st_column _year">1996</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Nacht</div>
        <div class="st_column _year">1968</div>
        <div class="st_column _section">Swiss</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Vanessa</div>
        <div class="st_column _surname">Schneider</div>
        <div class="st_column _year">2004</div>
        <div class="st_column _section">Russia</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">laura</div>
        <div class="st_column _surname">Beike</div>
        <div class="st_column _year">1952</div>
        <div class="st_column _section">Sweden</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Max</div>
        <div class="st_column _surname">Luke</div>
        <div class="st_column _year">1971</div>
        <div class="st_column _section">USA</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Kunze</div>
        <div class="st_column _year">2015</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Janina</div>
        <div class="st_column _surname">Endres</div>
        <div class="st_column _year">1955</div>
        <div class="st_column _section">Belgium</div>
      </div>
    </div>
  </div>
  <div class="st_wrap_table" data-table_id="4">
    <header class="st_table_header">
      <h2>CSS3 *~'</h2>
      <div class="st_row">
        <div class="st_column _rank">Rank</div>
        <div class="st_column _name">Name</div>
        <div class="st_column _surname">Surname</div>
        <div class="st_column _year">Year</div>
        <div class="st_column _section">Section</div>
      </div>
    </header>
    <div class="st_table">
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">John</div>
        <div class="st_column _surname">Doe</div>
        <div class="st_column _year">1973</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Max</div>
        <div class="st_column _surname">Luke</div>
        <div class="st_column _year">1971</div>
        <div class="st_column _section">USA</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Kunze</div>
        <div class="st_column _year">2015</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Jonas</div>
        <div class="st_column _surname">Nacht</div>
        <div class="st_column _year">1968</div>
        <div class="st_column _section">Swiss</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Vanessa</div>
        <div class="st_column _surname">Schneider</div>
        <div class="st_column _year">2004</div>
        <div class="st_column _section">Russia</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Janina</div>
        <div class="st_column _surname">Endres</div>
        <div class="st_column _year">1955</div>
        <div class="st_column _section">Belgium</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">Lena</div>
        <div class="st_column _surname">Eifel</div>
        <div class="st_column _year">1996</div>
        <div class="st_column _section">Germany</div>
      </div>
      <div class="st_row">
        <div class="st_column _rank">0</div>
        <div class="st_column _name">laura</div>
        <div class="st_column _surname">Beike</div>
        <div class="st_column _year">1952</div>
        <div class="st_column _section">Sweden</div>
      </div>
    </div>
  </div>
</main>

</Card.Body>
      </Card>
        </div>
    )
}