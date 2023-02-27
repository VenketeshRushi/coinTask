import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcClearFilters } from "react-icons/fc";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import Pagination from "../Components/Pagination";
import UserLoading from "../Components/UserLoading";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Box,
  Select,
  HStack,
  Flex,
} from "@chakra-ui/react";
function UserDetails() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [totalPages, setTotalPages] = useState(10);
  async function getUsers(page, filter) {
    let res = await axios.get(
      `http://localhost:8080/userDetails?page=${page}&limit=10&filter=${filter}`
    );
    return res;
  }

  const handleChangepage = (val) => {
    setPage(val);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    setLoading(true);
    getUsers(page, filter).then((res) => {
      setData(res.data.data);
      setLoading(false);

      setTotalPages(res.data.totalPages);
    });
  }, [page, filter]);

  if (loading) {
    return <UserLoading />;
  }
  return (
    <>
      <Flex justify="space-between" ml={4}>
        <Box fontWeight="bold" fontSize={40}>
          User Detail Page{" "}
        </Box>
        <Box p={4} display="flex" alignItems="center" gap="4px">
          {" "}
          <FcHome />
          <Link to="/">Back</Link>{" "}
        </Box>
      </Flex>

      {data.length === 0 ? (
        <Box mt={"-2rem"}>
          <Image
            w="60%"
            h="580px"
            m="auto"
            src="https://th.bing.com/th/id/R.8ba65c1e24ea7bd4b50e0f69a4bef3f9?rik=dSF92JN16bfB7Q&riu=http%3a%2f%2fwww.fam-kurtze.de%2fnodata.png&ehk=xHsrrcpZC%2fwtskgUVV4bAV9lZGVwHkL43l5F4%2b8EYBw%3d&risl=&pid=ImgRaw&r=0"
            alt="no data"
          />
        </Box>
      ) : (
        <>
          <HStack
            m={4}
            //  border="1px solid red"
            justifyContent="flex-end"
            gap="20px"
          >
            <Box p={4} display="flex" alignItems="center" gap="10px">
              {" "}
              <h3>Filters</h3>
              <FcClearFilters />
            </Box>
            <Select
              placeholder="Gender"
              value={filter}
              w="155px"
              onChange={handleFilter}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </HStack>

          <TableContainer p={3}>
            <Table variant="striped" colorScheme="pink">
              <Thead>
                <Tr>
                  <Th>Profile_Pic</Th>
                  <Th p={4} display="flex" alignItems="center" gap="10px">
                    {" "}
                    Name <MdOutlineDriveFileRenameOutline />
                  </Th>
                  <Th>Email</Th>
                  <Th>Location</Th>
                  <Th>Gender</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data?.map((user, i) => {
                    return (
                      <Tr borderRadius="10px" key={user.email}>
                        <Td>
                          <Image
                            src={user.picture.medium}
                            alt={user.name}
                            borderRadius="50%"
                          />
                        </Td>
                        <Td>
                          {user.name.first} {user.name.last}
                        </Td>
                        <Td>{user.email}</Td>
                        <Td>{user.location.country}</Td>
                        <Td>{user.gender}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
          <Box p={3} display="flex" justifyContent="center">
            <Pagination
              border="2px solid red"
              totalPages={totalPages}
              currentPage={page}
              handlePageChange={handleChangepage}
            />
          </Box>
        </>
      )}
    </>
  );
}

export default UserDetails;
