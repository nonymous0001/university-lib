import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants/index";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";



const Home=async() => {
  const result=await db.select().from(users);
  console.log(JSON.stringify(result,null));
  return(
    <>
      <BookOverview {...sampleBooks[0]}/>
      <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28"/>
    </>
);
}

export default Home;
