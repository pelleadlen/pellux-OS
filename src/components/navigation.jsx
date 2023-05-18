import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Sort } from "../icons/CaretSort.svg";

const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Selected Work", path: "/Work" },
  { id: 3, name: "About", path: "/About" },
  { id: 4, name: "Contact", path: "/Contact" },
];

export const Navigation = () => {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const filteredRoutes = routes.filter(
    (route) => route.id !== selectedRoute?.id
  );

  return (
    <>
      <nav className="text-xl mx-auto w-fit p-4">
        <Listbox value={selectedRoute} onChange={setSelectedRoute}>
          <Listbox.Button className="flex items-center gap-2">
            {selectedRoute.name}{" "}
            <span>
              <Sort />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute">
            {filteredRoutes.map((link) => (
              <>
                <Link to={link.path}>
                  <Listbox.Option key={link.id} value={link}>
                    {link.name}
                  </Listbox.Option>
                </Link>
              </>
            ))}
          </Listbox.Options>
        </Listbox>
      </nav>
    </>
  );
};
