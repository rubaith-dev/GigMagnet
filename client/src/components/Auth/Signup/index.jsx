import { Modal } from "flowbite-react";
import { useStateProvider } from "@/context/StateContext";
import ACTIONS from "@/context/actions"

const Signup = () => {
  const [{showSignupModal}, dispatch] = useStateProvider()

  return (
    <Modal
      show={showSignupModal}
      size="md"
      onClose={() => dispatch({type:ACTIONS.TOGGLE_SIGNUP_MODAL, payload:false})}
      popup
      className="transition duration-500"
    >
      <Modal.Header />
      <Modal.Body className="border">
        <p>Join us</p>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
