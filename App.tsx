import './App.css'
import Homepage from './components/Homepage/Homepage'
import NavBar from './components/Nav/Nav'
import ProductGrid from './components/ProductGrid/ProductGrid'

// import Homepage from './components/Homepage'
// import NavBar from './components/Nav'
// import ProductGrid from './components/ProductGrid'

function App() {

  return (
    <>
      <NavBar />
      
      <Homepage>
        <SectionTitle
          title="textoteste"
          subtitle="textoteste"
        />
       
      </Section>

      <Section>
        <SectionTitle
          title="textoteste"
          subtitle="textoteste"
          tagline="textoteste"
        />
        <ProductGrid />
      </Section>


      <Section>
        {/* Aqui vao os childrens */}
        <SectionTitle
          title=""
          subtitle=""
	  tagline=""
        />
        <PostsGrid />
      </Section>
    </>
  )
}

export default App