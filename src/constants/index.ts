import image1 from "../assets/icons/arrow1.svg"
import searchIcon from "../assets/icons/search.svg"
import logo from "../assets/images/logo.png"
import emergency from "../assets/icons/emergency.svg"
import big_pet from "../assets/images/big-pet.png"
import doctorImage1 from "../assets/images/doctor-image-1.png"
import doctorImage2 from "../assets/images/doctor-image-2.png"
import doctorImage3 from "../assets/images/doctor-image-3.png"
import doctorImage4 from "../assets/images/doctor-image-4.png"
import pet2 from "../assets/images/pet-2.png"
import feature1Icon from "../assets/icons/feature1.svg"
import feature2Icon from "../assets/icons/feature2.svg"
import arrow1 from "../assets/icons/arrow1.svg"
import ellipse1 from "../assets/images/ellipse1.png"
import pet_scratcher from "../assets/images/cat-scratcher.png"
import pet_carrier from "../assets/images/pet-carier.png"
import dog_leash from "../assets/images/dog-leash.png"
import heart from "../assets/icons/heart.svg"
import currency from "../assets/icons/currency.svg"
import quotes from "../assets/icons/quotes.svg"
import person1 from '../assets/images/person1.png'
import person2 from '../assets/images/person2.png'
import person3 from '../assets/images/person3.png'


const navbarLinks = [
    {
        id:1,
        title:"Home",
        route:"/"
    },
    {
        id:2,
        title:"About",
        route:"/about"
    },
    {
        id:3,
        title:"Grooming",
        route:"/grooming"
    },
    {
        id:4,
        title:"Services",
        route:"/services"
    }
]


const doctors=[
    {
        id:1,
        name:"Doctor's Name",
        clinic:"ABC Clinic",
        image:doctorImage1


    },
    {
        id:2,
        name:"Doctor's Name",
        clinic:"ABC Clinic",
        image:doctorImage2
        

    },
    {
        id:3,
        name:"Doctor's Name",
        clinic:"ABC Clinic",
        image:doctorImage3
        

    },
    {
        id:4,
        name:"Doctor's Name",
        clinic:"ABC Clinic",
        image:doctorImage4
        

    }
]

const features=[
    {
        id:1,
        title:"Online Consultation",
        description:"Connect virtually for expert advice and tailored care solutions, ensuring your pet's well-being.",
        icon:feature1Icon

    },
    {
        id:2,
        title:"In Personal Appointment",
        description:"Secure a face-to-face appointment for personalized care and immediate attention to your pet's needs.",
        icon:feature2Icon

    }
]

const services= [
    {
        id:1,
        title: 'Location wise Clinic & Doctor',
        icon: feature1Icon,
        count:10
    },
    {
        id:2,
        title: 'Virtual Consultations',
        icon: feature2Icon,
        count:10
    },
    {
        id:3,
        title: 'Pet Profile',
        icon: feature1Icon,
        count:10
    },
    {
        id:4,
        title: 'Tips & Articles',
        icon: feature2Icon,
        count:10
    },
    {
        id:5,
        title: 'Pet Medecine & Accessories',
        icon: feature1Icon,
        count:10
    },
    {
        id:6,
        title: 'Pet Buy & Sell',
        icon: feature2Icon,
        count:10
    }
]



const petProducts=[
{
    id:1,
    name:"Cat Scratcher",
    price: 50,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum pariatur earum sapiente?",
    image: pet_scratcher

},
{
    id:2,
    name:"Pet Carrier",
    price: 50,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum pariatur earum sapiente?",
    image: pet_carrier

},
{
    id:3,
    name:"Dog Leash",
    price: 50,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum pariatur earum sapiente? ",
    image: dog_leash

},
{
    id:4,
    name:"Cat Scratcher",
    price: 50,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum pariatur earum sapiente?",
    image: pet_scratcher

},
{
    id:5,
    name:"Pet Carrier",
    price: 50,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum pariatur earum sapiente?",
    image: pet_carrier

},
]

const testimonials=[
    {
        id:1,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
        personImage:person1,
        firstName:"John Doe",
        lastName:"Super Duper"
    },
    {
        id:2,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
        personImage:person2,
        firstName:"John Doe",
        lastName:"Super Duper"
    },
    {
        id:3,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna orci, porta sit amet scelerisque in, aliquam quis mauris sed.",
        personImage:person3,
        firstName:"John Doe",
        lastName:"Super Duper"
    }
]



const icons ={
    image1,
    searchIcon,
    emergency,
    arrow1,
    heart,
    currency,
    quotes
}


const images={
    logo,
    big_pet,
    pet2,
    ellipse1,
    pet_carrier,
    pet_scratcher,
    dog_leash,
    person1,
    person2,
    person3
}


const registrationSteps= [
    {
        id:1,
        icons:searchIcon,
        title:"Register your Restaurant"
    },
    {
        id:2,
        icons:searchIcon,
        title:"Create your restaurant profile and menu items"
    },
    {
        id:1,
        icons:searchIcon,
        title:"Start receiving orders"
    }
]

export const data={
    navbarLinks,
    icons,
    images,
    doctors,
    features,
    services,
    petProducts,
    testimonials,
    registrationSteps
}