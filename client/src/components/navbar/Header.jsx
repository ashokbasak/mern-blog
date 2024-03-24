import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar>
      {/* ><span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          YOUR BLOG
        </span */}
      <Button gradientDuoTone="purpleToBlue">YOUR BLOG</Button>

      <Navbar.Toggle />
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="h-10 w-12 lg:hidden  " color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"

          // onClick={() => dispatch(toggleTheme())}
        >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active={path === "/about"}>
          About
        </Navbar.Link>
        <Navbar.Link href="/dashboard" active={path === "/dashboard"}>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/projects" active={path === "/projects"}>
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
