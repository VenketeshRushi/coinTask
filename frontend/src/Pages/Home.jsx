import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { DiDatabase } from "react-icons/di";
import { MdDelete } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const FetchUsers = async () => {
    try {
      setLoading(true);
      let data = await axios.post(
        "http://localhost:8080/userFetch"
      );
      setLoading(false);
      toast({
        status: "success",
        position: "top",
        title: data.data,
        isClosable: true,
        duration: 2000,
      });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const DeleteUsers = async () => {
    try {
      setLoading(true);
      let data = await axios.delete(
        "http://localhost:8080/userDelete"
      );

      setLoading(false);
      alert("Please confirm that you wish to delete data.");
      toast({
        status: "success",
        position: "top",
        title: data.data.message,
        isClosable: true,
        duration: 2000,
      });
    } catch (err) {
      setLoading(false);
      toast({
        status: "failed",
        position: "top",
        title: err,
        isClosable: true,
        duration: 2000,
      });
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      {!loading ? (
        <Box
          p="10px"
        >
          <Stack
            margin="auto"
            justify="center"
            direction={["column", "row"]}
            spacing="50px"
          >
            <Button
              leftIcon={<DiDatabase />}
              colorScheme="linkedin"
              variant="solid"
              onClick={FetchUsers}
            >
              Fetch Users
            </Button>
            <Button
              leftIcon={<MdDelete />}
              colorScheme="red"
              variant="solid"
              onClick={DeleteUsers}
            >
              Delete Users
            </Button>
            <Button
              leftIcon={<FaUserFriends />}
              colorScheme="whatsapp"
              variant="solid"
            >
              <Link to="/userDetails">Users Details</Link>
            </Button>
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
