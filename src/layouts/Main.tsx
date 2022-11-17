import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

interface MainProps {
  title: string;
  children: React.ReactNode;
}

// const Main = ({ children, title }: MainProps) => {
//   return (
//     <div className="w-full h-screen min-h-screen flex">
//       <div className="col-span-1 bg-black row-span-6  ">
//         <Sider />
//       </div>
//       <div>
//         <div className="b col-span-5 row-span-1  ">
//           <Header title={title} />
//         </div>
//         <div className=" col-span-5 row-span-4 ">
//           <Content>{children}</Content>
//         </div>
//         <div className="col-span-5 row-span-1 ">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Main({ title, children }: MainProps) {
  return (
    <div className="w-full h-full flex">
      <div className="bg-black">
        <Sider />
      </div>

      <div className="w-full flex flex-col">
        <Header title={title} />
        <div className="w-full h-full bg-gray-300">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
// export default Main;
