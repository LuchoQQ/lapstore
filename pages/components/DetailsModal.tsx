import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../../types";

type Props = {
  data: Product;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const DetailsModal: React.FC<Props> = ({ data, isModalOpen, setModalOpen }) => {
  const theme = useTheme();
  return (
    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody fontFamily={theme.fonts.primary} fontSize="md">
          <Image src={data?.image} />
          <Text mb="1rem">{data?.title}</Text>
          <Text>{`Marca: ${data?.trademark}`}</Text>
          <Text>{`CPU: ${data?.processor}`}</Text>
          <Text>{`Grafica: ${data?.graphics}`}</Text>
          <Text>{`Almacenamiento: ${data?.storage}`}</Text>
          <Text>{`Memoria: ${data?.memory} ${data?.memory_description}`}</Text>
          <Text>{`Pantalla: ${data?.screen}"`}</Text>
          <Text mt="1rem" fontSize="xl">{`$${data?.price}`}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setModalOpen(false)}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailsModal;
