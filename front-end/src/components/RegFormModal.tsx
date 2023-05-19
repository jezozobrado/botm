import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import RegForm from "./RegForm";

interface Props {
  buttonText: string;
}
const RegFormModal = ({ buttonText }: Props) => {
  const { isOpen: isOpenSignUp, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button width="120px" variant="btn-primary" onClick={onOpen}>
        {buttonText}
      </Button>
      <Modal isOpen={isOpenSignUp} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="brand.200">
          <ModalHeader color="white" letterSpacing={1}>
            Books are awaiting!
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegForm submitText={"See the books"} onSubmit={onClose} />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegFormModal;
