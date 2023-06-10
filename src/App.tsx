import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import GrandEntry from './GrandEntry';


function App() {
  const h1Ref: React.MutableRefObject<any> = useRef();
  const h2Ref: React.MutableRefObject<any> = useRef();
  const h3Ref: React.MutableRefObject<any> = useRef();
  const scrollAreaRef: React.MutableRefObject<any> = useRef();
  const initEntries: any = {};
  const [entryVisible, setEntryVisible] = useState(initEntries);
  const [rootScroll, setRootScroll] = useState(0);

  useEffect(() => {
    let options: Object = {
      root: document.querySelector('#scroll-area'),
      rootMargin: '0px',
      threshold: 1.0,
    }
    let observer: IntersectionObserver = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        setEntryVisible({...entryVisible, "heading2": true});
      }
    });
    h2Ref.current.style.opacity = 0;
  }, [])

  let h1Till = 6;
  let h1To2 = 15;
  let h2Till = 24;
  let h2To3 = 30;
  let h3Till = 40;
  function updateScrollState(el: HTMLElement) {
    setRootScroll(100*el.scrollTop / (el.scrollHeight - el.clientHeight));
    if(rootScroll < 1) {
      h1Ref.current.style.opacity = 1;
      h2Ref.current.style.opacity = 0;
    }
    else if(rootScroll < h1Till) {
      h1Ref.current.style.display = "flex";
      h2Ref.current.style.display = "none";
    } else if(rootScroll < h1To2) {
      h1Ref.current.style.display = "flex";
      h2Ref.current.style.display = "flex";
    } else if(rootScroll < h2Till) {
      h2Ref.current.style.display = "flex";
      h3Ref.current.style.display = "none";
    } else if(rootScroll < h2To3) {
      h2Ref.current.style.display = "flex";
      h3Ref.current.style.display = "flex";
    }
    if(rootScroll > h1Till && rootScroll < h1To2) {
      h1Ref.current.style.opacity = 1 - ((Math.floor((rootScroll-h1Till)*(100/(h1To2-h1Till)) * 10) / 1000));
      h2Ref.current.style.opacity = Math.floor((rootScroll-h1Till)*(100/(h1To2-h1Till)) * 10) / 1000;
    } else if(rootScroll > h2Till && rootScroll < h2To3) {
      h2Ref.current.style.opacity = 1 - ((Math.floor((rootScroll-h2Till)*(100/(h2To3-h2Till)) * 10) / 1000));
      h3Ref.current.style.opacity = Math.floor((rootScroll-h2Till)*(100/(h2To3-h2Till)) * 10) / 1000;
    }
    console.log("h1ref opacity is: ", h1Ref.current.style.opacity);
    console.log("h2ref opacity is: ", h2Ref.current.style.opacity);
  }

  return (
    <div id='scroll-area' onScroll={(e) => updateScrollState(e.target as HTMLElement)} ref={scrollAreaRef} className=' h-screen w-full overflow-scroll hide-scrollbar'>
      <div className='fixed text-green-500 text-md bg-white top-5 right-5 z-10'>{rootScroll.toString().substring(0,5)}</div>

      <div ref={ h1Ref } className='fixed h-full w-full flex justify-center items-center bg-slate-800 -z-20'>
        <p id='heading1' className="text-5xl text-purple-400">Heading 1</p>
      </div>

      <div className='w-full'>
        <div className="w-5 overflow-clip invisible">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque omnis ipsam quisquam sapiente quis dolor. Iste quasi commodi quas aspernatur, doloribus quos dolor illum facilis sunt, provident cupiditate delectus vel placeat neque nihil magni ullam fuga soluta totam cum? Quos explicabo officiis quia ipsa atque nisi optio rerum impedit et asperiores, id debitis fugiat soluta, consectetur, rem dicta? Tenetur facilis voluptatem ut quos adipisci aspernatur nesciunt, at distinctio consectetur accusamus quod rerum quam ipsum qui sit hic quae blanditiis reprehenderit iure aliquam saepe. Quibusdam maiores iste quam recusandae accusamus explicabo delectus rem modi cupiditate quos perferendis, magnam, ea dolor temporibus tempore provident placeat sunt porro nam beatae facere voluptate corporis. Facere nostrum voluptas itaque unde blanditiis, sint et exercitationem, possimus sed vitae placeat ipsam alias quaerat. Voluptate qui rem eveniet voluptatum repellendus suscipit rerum provident, ut nulla sit laborum perferendis dolor iusto unde optio nesciunt, totam sequi, ad dolore non. Inventore, ad voluptate dolores id repellendus nesciunt quos perferendis cupiditate officiis vitae cum architecto? Sequi inventore iste doloribus labore! Corrupti, facilis. Tempora quam cum rerum ipsa, accusamus quo possimus hic. Perferendis, necessitatibus ullam veritatis similique quo consequuntur labore odit rerum voluptatum nihil repellat adipisci, unde ratione tempore ab dolores nisi doloribus hic facilis. Ipsam dolore consequuntur explicabo aliquid aspernatur perferendis voluptatum animi, ab nesciunt culpa suscipit facilis! Officiis, quidem. Harum quod qui aperiam veniam cupiditate consectetur recusandae optio aut soluta commodi! Deserunt, laborum, libero similique blanditiis amet neque ut optio fuga quidem ex dolore soluta quae sit incidunt autem. Optio delectus aliquid ex neque. Voluptatibus laborum modi asperiores voluptas natus, quidem perspiciatis! Laborum officiis unde sit ut cum, ab dolore assumenda facilis iusto labore aliquam! Explicabo nihil velit minus maiores vero odio quas ad sit nesciunt. Quod quos ut, iure animi, error eos consequatur molestiae non iste aut culpa! Dignissimos totam unde ab rem non hic quia repudiandae ad minus quod possimus, dolorum commodi libero sapiente laboriosam fugiat, alias numquam nulla quidem inventore veritatis ducimus eveniet. Nemo velit voluptas fugiat enim omnis aut vitae error explicabo unde praesentium consequatur cum perspiciatis nostrum, consectetur asperiores ab quidem aliquid iure autem libero dolore optio inventore modi consequuntur! Officia iusto non delectus illo blanditiis quam temporibus, itaque odio commodi, tempore quos eius officiis exercitationem numquam in veniam distinctio nesciunt rerum id. Veritatis, rerum debitis id eaque error soluta eveniet tempora reprehenderit praesentium sunt, maxime, consequatur architecto quidem beatae perferendis quos? Id animi maiores necessitatibus qui totam? Fugit expedita voluptatum asperiores dolor, nihil nesciunt laborum aliquam, nam similique consequuntur hic beatae perspiciatis inventore dolorem voluptas repellat odit accusantium accusamus quisquam deserunt ea, aut temporibus nulla. Enim necessitatibus aut quisquam magni adipisci ullam aspernatur laborum quis et consequatur illum modi at culpa molestiae soluta, laboriosam quos iste atque veniam non labore itaque maiores nisi. Tempora omnis, natus ullam harum minus inventore laborum magnam cum quasi eveniet ipsum esse beatae est repellat veniam error, dolorum, fuga recusandae necessitatibus numquam quidem ipsa! Tenetur corrupti eos at nobis, repudiandae odit debitis quia unde eius explicabo nesciunt aut est?
        </div>
      </div>
      
      <div ref={ h2Ref } className='fixed top-0 h-full w-full hidden opacity-0 justify-center items-center bg-slate-100 -z-10'>
        <div id='heading2' className={` font-bold text-5xl transition-all duration-1000 delay-300 text-green-800 ${entryVisible.heading2 ? 'translate-x-0 opacity-100' : '-translate-x-[0rem] opacity-100'}`}>
          <div className="">What has been cooked, what will be cooked - that is the question..</div>
        </div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aliquid quas, eveniet eos animi provident vel, temporibus cum labore nisi cupiditate id tempora quo est expedita quam itaque rerum illum minima dolorum unde accusamus dolores! Dolore maiores quis recusandae praesentium nisi placeat quia fuga expedita ullam. Mollitia beatae ullam accusamus?</p> */}
      </div>
      <div ref={ h3Ref } className='fixed top-0 h-full w-full hidden opacity-0 justify-center items-center bg-black -z-10'>
        <div id='heading2' className={` font-bold text-5xl transition-all duration-1000 delay-300 text-gray-300 ${entryVisible.heading2 ? 'translate-x-0 opacity-100' : '-translate-x-[0rem] opacity-100'}`}>
          <div className="">What good is good if it aint good enough</div>
        </div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aliquid quas, eveniet eos animi provident vel, temporibus cum labore nisi cupiditate id tempora quo est expedita quam itaque rerum illum minima dolorum unde accusamus dolores! Dolore maiores quis recusandae praesentium nisi placeat quia fuga expedita ullam. Mollitia beatae ullam accusamus?</p> */}
      </div>
      {/*
      <div className='h-full w-full flex justify-center items-center bg-slate-800'>
        <p id='heading3' className="text-5xl text-purple-400">Heading 3</p>
      </div>
      */ }
     
    </div>
  );
}

export default App;
