import { jwtDecode } from "jwt-decode";
import { Container } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import userStore from "../../stores/userStore";
import { observer } from "mobx-react";

const Profile = observer(() => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

      console.log(jwtDecode(JSON.parse(localStorage.getItem("userData")).token).username)

    return(
        <Container className="mt-5">
            <h1 className="text-left mb-4" data-aos="fade-right" data-aos-duration="400">Добро пожаловать, {jwtDecode(JSON.parse(localStorage.getItem("userData")).token).username}!</h1>
            <p data-aos="fade-right" data-aos-duration="600">Name: {jwtDecode(JSON.parse(localStorage.getItem("userData")).token).username}</p>
            <p data-aos="fade-right" data-aos-duration="800">Email: {jwtDecode(JSON.parse(localStorage.getItem("userData")).token).email}</p>
        </Container>
    );
});

export default Profile;