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
  btnVariant: string;
}

const RegFormModal = ({ buttonText, btnVariant }: Props) => {
  const { isOpen: isOpenSignUp, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        width="120px"
        variant={btnVariant}
        onClick={onOpen}
        fontWeight="normal"
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpenSignUp} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="brand.200">
          <ModalHeader color="white" letterSpacing={1}>
            This is the good part.
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <RegForm
              submitText={"See the books"}
              onSubmit={(error) => !error && onOpen}
            />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegFormModal;
