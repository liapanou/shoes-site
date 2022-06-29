import { useState } from "react";

function Card(props: {
  name: string;
  price: number;
  setFavourite: () => void;
  favourite: boolean;
}) {
  return (
    <div className="py-4 card card-compact w-full bg-base-100 shadow-xl">
      <div className="flex ">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <img
          onClick={() => props.setFavourite()}
          className="w-12 h-12 cursor-pointer"
          src={
            props.favourite
              ? "https://s2.svgbox.net/hero-solid.svg?ic=heart&color=FF0000"
              : "https://s2.svgbox.net/hero-outline.svg?ic=heart&color=000000"
          }
          alt=""
        />
      </div>

      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">
            Buy Now {props.price} Euros
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const list = [
    {
      name: "Bread - French Stick",
      price: 39,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Lettuce - Romaine",
      price: 7,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Lidsoupcont Rp12dn",
      price: 55,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Wine - German Riesling",
      price: 57,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Seedlings - Clamshell",
      price: 5,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Sparkling Wine - Rose, Freixenet",
      price: 61,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Soup - French Can Pea",
      price: 41,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Sausage - Breakfast",
      price: 17,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Wine - Red, Gamay Noir",
      price: 60,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Nougat - Paste / Cream",
      price: 41,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Tofu - Soft",
      price: 44,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Cherries - Frozen",
      price: 91,
      number: [33, 34, 36, 38, 39, 40],
    },
    {
      name: "Soup - Campbells, Creamy",
      price: 65,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Water - Spring Water, 355 Ml",
      price: 67,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Oyster - In Shell",
      price: 52,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Pork - Ground",
      price: 21,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Bacardi Breezer - Tropical",
      price: 6,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Coffee - Dark Roast",
      price: 68,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Beef - Outside, Round",
      price: 71,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Cheese - Cottage Cheese",
      price: 84,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Soup Campbells",
      price: 72,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Bread - Pain Au Liat X12",
      price: 96,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Ostrich - Prime Cut",
      price: 58,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Olive - Spread Tapenade",
      price: 37,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "White Baguette",
      price: 37,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Beer - Blue",
      price: 63,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Sugar - Cubes",
      price: 61,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Coffee - Cafe Moreno",
      price: 85,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Bar Mix - Lemon",
      price: 77,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
    {
      name: "Squid U5 - Thailand",
      price: 7,
      number: [33, 34, 36, 38, 39, 40],
      favourite: false,
    },
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState(1000);
  const [select1, setSelect1] = useState(40);
  const [papoutsia, setPapoutsia] = useState(list);

  return (
    <div>
      <header className="border w-full h-20 grid grid-cols-3 gap-4 bg-red-500">
        <img
          className="w-15 h-20"
          src="https://logos.textgiraffe.com/logos/logo-name/Lia-designstyle-smoothie-m.png"
          alt=""
        />
        <div>
          <input
            onChange={(evt) => setValue(evt.currentTarget.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs mt-4"
          />
          <button className="btn gap-2 w-15 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Button
          </button>
        </div>

        <img
          onClick={() => setOpen(!open)}
          className="w-12 h-12 ml-auto relative"
          src="https://s2.svgbox.net/hero-solid.svg?ic=menu"
          alt=""
        />

        <div
          className={
            open
              ? " border w-60 h-56 rounded-lg z-10 absolute top-10 right-0 flex text-center justify-center bg-white shadow-lg "
              : "hidden"
          }
        >
          <ul>
            <a>
              <li className="block mt-4">Profile</li>
            </a>
            <a>
              <li className="block mt-4"> Messages</li>
            </a>
            <a>
              <li className="block mt-4">Settings</li>
            </a>
          </ul>
        </div>
      </header>
      {/* save the state of the price */}
      <select
        id="value"
        defaultValue="Select select"
        onChange={(evt) => setSelect(Number(evt.currentTarget.value))}
        className="select w-full max-w-xs"
      >
        <option> max price</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
      </select>

      <select
        id="value"
        defaultValue="Select select1"
        onChange={(evt) => setSelect1(Number(evt.currentTarget.value))}
        className="select w-full max-w-xs"
      >
        <option> number</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
      </select>

      <div className="grid grid-cols-5 gap-4 p-4">
        {papoutsia
          //filer(1): price < selection , filter(2):if a number of the shoe is in the array of shoes , map:creates a lot of cards
          .filter((x) => x.price < select)
          .filter((y) => y.number.includes(select1))
          .map((a, index) => (
            <Card
              key={index}
              favourite={a.favourite}
              name={a.name}
              price={a.price}
              setFavourite={() => {
                const list = [...papoutsia];
                list[index].favourite = !a.favourite;
                setPapoutsia(list);
              }}
            />
          ))}
      </div>

      <footer className="footer p-10 bg-neutral text-neutral-content fixed bottom-0">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}
export default Home;
