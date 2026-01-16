import Button from "./Button";

function Navbar() { 
    return (
        <header className = 'flex text-black p-3 justify-between bg-gray-200'>
            <h1 className='text-3xl'>Tienda</h1>
            <nav className = 'flex gap-5'>
                <a href="">celulares</a>
                <a href="">relojes</a>
                <a href="">cámaras</a>
                <a href="">computadoras</a>
                <a href="">tabletas</a>
            </nav>
            <Button text = {'carrito'} styles = 'bg-blue-500 p-2 rounded m-3 text-white' />
        </header>
    );
}                   

export default Navbar;