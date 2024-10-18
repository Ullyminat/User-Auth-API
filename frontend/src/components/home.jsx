import React, { useEffect } from "react";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = (() => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4" data-aos="fade-up">Добро пожаловать!</h1>

      <Carousel className="mb-5" data-aos="fade-up">
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "648px"}}
            src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg"
          />
          <Carousel.Caption>
            <h3>Высокое качество услуг</h3>
            <p>Мы предоставляем услуги на высшем уровне, следуя мировым стандартам.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "648px"}}
            src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg"
          />
          <Carousel.Caption>
            <h3>Надежность и опыт</h3>
            <p>Наша команда имеет более 10 лет опыта на рынке.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height: "648px"}}
            src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg"
          />
          <Carousel.Caption>
            <h3>Индивидуальный подход</h3>
            <p>Мы учитываем потребности каждого клиента, предлагая персонализированные решения.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* CARDS */}
      <h2 className="text-center mb-4" data-aos="fade-up">Наши услуги</h2>

      <Row className="mb-5 text-center">
        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Img variant="top" src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg" />
            <Card.Body>
              <Card.Title>Бизнес-консалтинг</Card.Title>
              <Card.Text>
                Наши специалисты помогут вам оптимизировать процессы, сократить издержки и повысить эффективность работы.
              </Card.Text>
              <Button variant="dark">Узнать больше</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Img variant="top" src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg" />
            <Card.Body>
              <Card.Title>IT Услуги</Card.Title>
              <Card.Text>
                Мы предлагаем решения по автоматизации бизнеса, разработке ПО, настройке инфраструктуры и кибербезопасности.
              </Card.Text>
              <Button variant="dark">Узнать больше</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Img variant="top" src="https://photogora.ru/img/product/big/4330/1473684794869604330.jpg" />
            <Card.Body>
              <Card.Title>Цифровой маркетинг</Card.Title>
              <Card.Text>
                Наши эксперты помогут вам увеличить узнаваемость бренда и привлечь новых клиентов через цифровые каналы.
              </Card.Text>
              <Button variant="dark">Узнать больше</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* GOVNO */}
      <h2 className="text-center mb-4" data-aos="fade-up">Почему выбирают нас</h2>

      <Row className="text-center">
        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Профессионализм</Card.Title>
              <Card.Text>
                В нашей команде работают высококвалифицированные специалисты, готовые помочь в решении любой задачи.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Современные технологии</Card.Title>
              <Card.Text>
                Мы используем новейшие технологии и методы для достижения наилучших результатов.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4" data-aos="fade-up">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Поддержка 24/7</Card.Title>
              <Card.Text>
                Наша служба поддержки доступна для вас круглосуточно, чтобы вы могли всегда получить помощь в любой момент.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

export default Home;