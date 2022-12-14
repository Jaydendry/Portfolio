import ProjectPage from "../projectTemplate";

export default function Tyrewatcher(){
    return(
            <ProjectPage
                color="linear-gradient(45deg,#ee8e33,#f85e45)"
                colorFlat="#ee8e33"
                heading="Tyrewatcher"
                roles="Project & Design Manager"

                overviewA="Tyrewatcher is a mobile app used
                to maintain your tyres health,
                being provided with a dashboard
                directly connected via Bluetooth to
                your wheel tyre pressure sensors."

                overviewB="From here you will be able to view
                and manage the temperature,
                pressure and status of your tyres   
                and be notified if anything unusual
                like a puncture or overheat occurs"

                overviewC="The task was split into two categories, both a mobile app upgrade ontop of the existing one that I assisted in testing & publishing on IOS/Android and a new tablet version for our headunits so you can check your tyre status right from the cabin of your car."

                processA="In a similar fashion to my other projects, I was presented with an old version that wasn't very developed and made the decision to redesign it utilising the same branding. I also needed to adapt the design to tablet which was also a challenge given the sizing of the tablet."

                processB="I started off by grabbing the most notable features and identifying what should go where and also redefining the strong orange colour palette to something slightly more appealing and toned down, leading to accents of orange to red gradients appearing in small doses throughout the app"

                processC="I also researched the best methods to display tyre pressures and compared our potential app to competitors and tried to match or improve our features to make it a competitor in the market."

                conclusionA="Currently the tablet app is being developed however we're struggling with matching the bluetooth communication protocols of the base head unit to the tyre sensors so the project is process waiting on both the supplier and developers to resolve the issue."
                
                conclusionB="The New phone app however is currently on hold due to currently ongoing number of tasks and is awaiting a ready signal from my boss"
                
                abrProject="tw"

                image1="hero"

                image2="1"
                image3="2"

                image5="phone1"
                image6="phone2"
                image7="phone3"

                image8="tablet0"
                image9="tablet1"
                image10="tablet2"


                nextName="OBDScanz"
                nextRole="Project & Design Manager" 
                nextImage= '/images/obdsz/hero.png'
                nextPage="projects/obdscanz"
            />
    )
}