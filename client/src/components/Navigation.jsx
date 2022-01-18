import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


// simple navbar, with branches to userprofile and card library


function Navigation(){
    
    // add a switch so that the log in becomes a log out option if the user is logged in
    // use a ternary to decide to display either a logout button or a link to the LoginAndSignUp page

    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>

        {/* add log in / sign up routes here */}
        {/* add routes for userProfile and Library as well */}

            </Container>
        </Navbar>
        </>
    );
}

export default Navigation