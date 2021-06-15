import React from 'react';
import Card from './Card';
import './card-style.scss';
import {Row} from 'reactstrap';
class Main extends React.Component {

  render() {
    return (
      <div>
        <main id='doc-2'>
        <div className="container">
          <Row > <div className="col-6 px-0">Yangiliklar</div> </Row>
          <div className="row">
            <div className="col-lg-3 col-12 col-md-6  px-0 " >
              <Card picture="/images/Rectangle 32.png" title="Markazimiz hodimining katta yutug’i" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 34.png" title="Technocorp hisobot tayyorlovchi vositani ishlab chiqmoqda" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              /></div>
              <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 37.png" title="Markaz xodimlari Alisher Navoiy tavalludining 580 yilligiga bag‘ishlangan tadbirda ishtirok..." text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              /></div>
              <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Re38.png" title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
          </div>
          <div className="row" >
          <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 43.png" title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 45.png" title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 44.png" title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
            <div className="col-lg-3 col-12 col-md-6  px-0" >
              <Card picture="/images/Rectangle 46.png" title="Kutilmaganda Namangandagi mahallaga borgan prezident shahar hokimi va prokurorga tanbeh berdi" text="Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem quaerat illo eos consequatur numquam at, nostrum veritatis veniam autem maiores atque, dicta, rerum cum maxime facere eveniet eum nobis non..."
              date="23 fevral 2021 yil" link="Batafsil >"
              />
            </div>
          </div>
        </div>
        </main>
      </div>
    );
  }
}
export default Main;
