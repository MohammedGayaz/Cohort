import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

const insertUser = async ({username, password, firstname, lastname}: User) => {
    const res = await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname
        }
    })
    console.log(res)
};

const userData: User = {
  username: "admin1@mail.com",
  password: "password",
  firstname: "joey1",
  lastname: "oggy1",
};





insertUser(userData);
