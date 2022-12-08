import React, {useState, useEffect} from 'react';
import mainImg from "../../../img/main_photo.jpg"
import '../../../style/home.css'
import {TbCloudComputing} from 'react-icons/tb'
import {IoIosAddCircle, IoIosRemoveCircle,} from "react-icons/io"
import {RiArticleLine} from "react-icons/ri"
import {GoPrimitiveDot} from "react-icons/go"
import img from "../../../img/member-scientometrics-logo.png"
import {useTranslation,} from 'react-i18next'
import {Link} from "react-router-dom"
import i18next from 'i18next'
import "animate.css/animate.min.css";
import {SiGooglescholar} from "react-icons/si";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import file from "../../../file/Kourosh Parand CV.pdf"
import {Icon, IconButton} from "@mui/material";
import CustomModal from "../CustomModal";
import EdiText from 'react-editext';
import {MdEdit} from "react-icons/md";


function EditMainPage() {

    const [hiddenItems, setHiddenItems] = useState({
        titleShow: '',
        textShow: '',
        yearShow: '',
        imageShow: ''
    })
    const [showModal, setShowModal] = useState(false)
    const [tempSectionName, setTempSectionName] =useState("")
    const [tempFields, setTempFields] = useState({
        year: '',
        header: '',
        title: '',
        text: '',
        picture: ''
    })

    //headers
    const [sections, setSections] = useState([
        {
            year: '',
            header: '',
            title: '',
            text: '',
            picture: ''
        }
    ])

    const {t} = useTranslation();
    const [education, setEducation] = useState([]);
    const [cooperation, setCooperation] = useState([]);
    const [award, setAward] = useState([]);
    const [journal1, setjournal1] = useState([]);
    const [journal2, setjournal2] = useState([]);

    useEffect(() => {
        let educationList = i18next.t('education',{ returnObjects: true })
        setEducation(educationList);

        let cooperationList = i18next.t('cooperation', {returnObjects: true});
        setCooperation(cooperationList);

        let journalList1 = i18next.t('journal1', {returnObjects: true});
        setjournal1(journalList1);

        let journalList2 = i18next.t('journal2', {returnObjects: true});
        setjournal2(journalList2);

        let awardList = i18next.t('award', {returnObjects: true});
        setAward(awardList);
    },[]);

    const handleSubmitModal = () => {
        let updateSections = [...sections];
        updateSections.push({
            year: tempFields.year,
            header: tempFields.header,
            title: tempFields.title,
            text: tempFields.text,
            picture: tempFields.picture
        })

        setSections(updateSections)

        setTempFields({
            year: '',
            header: '',
            title: '',
            text: '',
            picture: ''
        })
        handleCloseModal()
    }

    //-------------------------------------------OPEN MODALS FUNCTIONS--------------------------------------------------
    const handleOpenModal = (sectionName, headerName, textShow, yearShow, titleShow, imageShow) => {

        setHiddenItems({
            titleShow: titleShow,
            textShow: textShow,
            yearShow: yearShow,
            imageShow: imageShow
        })

        setShowModal(true)

        setTempFields({
            year: '',
            header: '',
            title: '',
            text: '',
            picture: ''
        })

        setTempSectionName(sectionName)

        setTempFields({
            ...tempFields,
            header: headerName
        })
    }

    //--------------------------------CLOSE MODAL FUNCTION (works for all)----------------------------------------------
    const handleCloseModal = () => {
            setShowModal(false)
    }

    //----------------------------------SUBMIT ADD-MODALS FUNCTIONS-----------------------------------------------------

    const handleTempValues = (value, fieldName) => {
        let updatedTempFields = {...tempFields};
        updatedTempFields[fieldName] = value
        setTempFields(updatedTempFields);
    }

    return (
        <>

            <div style={{overflowY: "scroll", height: window.innerHeight*0.92, overflowX: "hidden"}}>
                <div
                    className="d-flex justify-content-center align-items-start mt-5 card-contain animate__animated animate__fadeInDown">
                    <div className="mainImgContain">
                        <img src={mainImg} className="mainImg"/>
                        <div className={"mainImg-overlay d-flex justify-content-center align-items-center"}>
                            <input id={"mainImg-upload"} style={{width: 0, opacity: 0}} type={"file"}/>
                            <label htmlFor={"mainImg-upload"}>
                                Click To Upload New Photo
                            </label>
                        </div>
                    </div>
                    <div className="cv-text mt-4">
                        <h5>
                            <div className={"edit-cv-title"}>
                                <EdiText
                                    className={"edit-text"}
                                    viewProps={{
                                        style: {borderRadius: 10}
                                    }}
                                    type='text'
                                    buttonsAlign='before'
                                    value="Spectral Methods, ODEs, PDEs And Scientific Computing"
                                    // onSave={}
                                />
                            </div>
                        </h5>
                        <h2 className="my-4">
                            <div className={"edit-cv-name"}>
                                <EdiText
                                    className={"edit-text"}
                                    viewProps={{
                                        style: {borderRadius: 10}
                                    }}
                                    type='text'
                                    buttonsAlign='before'
                                    value={t("title")}
                                    // onSave={}
                                />
                            </div></h2>
                        <h6>
                            <div>
                                <EdiText
                                    className={"edit-text"}
                                    viewProps={{
                                        style: {borderRadius: 10}
                                    }}
                                    type='text'
                                    buttonsAlign='before'
                                    value={"I am Professor @ Department of Computer and Data Sciences,\n" +
                                        "                            Faculty of Mathematical Sciences, Shahid Beheshti University"}
                                    // onSave={}
                                />
                            </div>
                        </h6>
                        <p>
                            <div>
                                <EdiText
                                    className={"edit-text"}
                                    viewProps={{
                                        style: {borderRadius: 10}
                                    }}
                                    type='text'
                                    buttonsAlign='before'
                                    value={"My main research field is Scientific Computing, Spectral Methods, Meshless methods, Ordinary\n"+
                                        "Differential Equations(ODEs), Partial Differential Equations(PDEs),Data Mining,Machine Learning\n"+
                                        "and Computational\n"+
                                        "Neuroscience Modeling."}
                                    // onSave={}
                                />
                            </div>

                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href={file} className="cv-btn">Download CV</a>
                            <Link to="/contact" className="cv-btn">Contact</Link>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip className="deleteTooltip">
                                        Google Scholar
                                    </Tooltip>
                                }
                            ><a className="mx-2" href="https://scholar.google.com/citations?user=44wzW2AAAAAJ&hl=en"
                                target="_blank"><SiGooglescholar fontSize="30px"/></a>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip className="deleteTooltip">
                                        Scientific evaluation system of faculty members
                                    </Tooltip>
                                }
                            ><a href="http://scimet.sbu.ac.ir/Kourosh_Parand" target="_blank"><img src={img} style={{
                                width: "30px",
                                height: "30px"
                            }}/></a>
                            </OverlayTrigger>

                        </div>
                    </div>
                </div>
                <div className="mx-5 interested mb- 5">
                    <div className="interested-title d-flex align-items-center">
                        <h3>Interested In</h3>
                        <div className={"mb-1"}>
                            {/*textShow, yearShow, titleShow, imageShow*/}
                            <IconButton onClick={() =>
                                handleOpenModal(
                                    "Interested In",
                                    "InterestedIn",
                                    true, false,
                                    true, false
                                )}
                            >
                                <IoIosAddCircle color={"green"} size={35}/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="row">

                        <div className="mx-5 interested mb-5">
                            <div className="row">
                        {
                            sections.map((section) => (
                                // <div className="mx-5 interested mb-5">
                                //     <div className="row">

                                section.header === 'InterestedIn'
                                    ? <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="interested-card">
                                            <div className={"w-100 d-flex justify-content-end"}>
                                                <IconButton>
                                                    <IoIosRemoveCircle color={"red"} size={35}/>
                                                </IconButton>
                                            </div>

                                            <div className="icon">
                                                <TbCloudComputing/>
                                            </div>
                                            <div className="title" style={{fontWeight: "800"}}>
                                                <EdiText
                                                    className={"edit-text"}
                                                    viewProps={{
                                                        style: {borderRadius: 10}
                                                    }}
                                                    type='text'
                                                    buttonsAlign='before'
                                                    value={section.title}
                                                    // onSave={}
                                                />
                                            </div>
                                            <div className="text">
                                                <EdiText
                                                    className={"edit-text"}
                                                    viewProps={{
                                                        style: {borderRadius: 10}
                                                    }}
                                                    type='text'
                                                    buttonsAlign='before'
                                                    value={section.text}
                                                    // onSave={}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    : null

                            ))
                        }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-5 activities mb-5">
                    <div className="activities-title d-flex align-items-center">
                        <h3>My Activities</h3>
                        <div className={"mb-1"}>
                            <IconButton onClick={() =>
                                handleOpenModal(
                                    "My Activities",
                                    "MyActivities",
                                    true, false,
                                    true, false
                                )}>
                                <IoIosAddCircle color={"green"} size={35}/>
                            </IconButton>
                        </div>
                    </div>

                    <div>
                        <div className="row">
                            {
                                sections.map((section) => (
                                    section.header === 'MyActivities'
                                    ? <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="activities-card"  style={{minHeight: '320px'}}>
                                            <div className={"w-100 d-flex justify-content-end"} style={{marginTop: "-10px"}}>
                                                <h4>
                                                    <IconButton >
                                                        <IoIosRemoveCircle color={"red"} size={35}/>
                                                    </IconButton>
                                                </h4>
                                            </div>
                                            <div className="icon">
                                                <RiArticleLine/>
                                            </div>
                                            <div className="title">
                                                <h4>
                                                    <EdiText
                                                        className={"edit-text"}
                                                        viewProps={{
                                                            style: {borderRadius: 10}
                                                        }}
                                                        type='text'
                                                        buttonsAlign='before'
                                                        value={section.title}
                                                        // onSave={}
                                                    />
                                                </h4>
                                            </div>

                                            <div className="text">
                                                <p>
                                                    <EdiText
                                                        className={"edit-text"}
                                                        viewProps={{
                                                            style: {borderRadius: 100}
                                                        }}
                                                        type='text'
                                                        buttonsAlign='before'
                                                        value={section.text}
                                                        // onSave={}
                                                    />
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                        : null
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mx-5 activities mb-5">
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="d-flex activities-title align-items-center">
                                    <h3>Education</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                                "Education",
                                                "Education",
                                                true, true,
                                                true, false
                                            )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                {
                                    sections.map((section) => (
                                        section.header === 'Education'
                                        ? <div className={"d-flex"}>
                                                <div>
                                                    <IconButton>
                                                        <IoIosRemoveCircle color={"red"} size={35}/>
                                                    </IconButton>
                                                </div>
                                                <div className="education-box">
                                                    <div className="d-flex align-items-center">


                                                        <span>
                                                            <div>
                                                                <EdiText
                                                                    className={"edit-text"}
                                                                    viewProps={{
                                                                        style: {borderRadius: 10}
                                                                    }}
                                                                    type='text'
                                                                    buttonsAlign='before'
                                                                    value={section.year}
                                                                    // onSave={}
                                                                />
                                                            </div>
                                                        </span>
                                                        <h6>
                                                            <div>
                                                                <EdiText
                                                                    className={"edit-text"}
                                                                    viewProps={{
                                                                        style: {borderRadius: 10}
                                                                    }}
                                                                    type='text'
                                                                    buttonsAlign='before'
                                                                    value={section.title}
                                                                    // onSave={}
                                                                />
                                                            </div>
                                                        </h6>
                                                    </div>
                                                    <h4>
                                                        <div>
                                                            <EdiText
                                                                className={"edit-text"}
                                                                viewProps={{
                                                                    style: {borderRadius: 10}
                                                                }}
                                                                type='text'
                                                                buttonsAlign='before'
                                                                value={section.text}
                                                                // onSave={}
                                                            />
                                                        </div>
                                                    </h4>
                                                </div>
                                            </div>
                                            : null
                                    ))
                                }
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="activities-title d-flex align-items-center">
                                    <h3>Teaching</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                                "Teaching",
                                                "Teaching",
                                                true, false,
                                                true, false
                                            )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="teaching-box">
                                    {
                                        sections.map((section) => (
                                            section.header === 'Teaching'
                                            ? <div>
                                                    <div className={"d-flex align-items-center "}>
                                                        <IconButton className={"mb-1"}>
                                                            <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                        </IconButton>
                                                        <div>
                                                            <h4>
                                                                <div>
                                                                    <EdiText
                                                                        className={"edit-text"}
                                                                        viewProps={{
                                                                            style: {borderRadius: 10}
                                                                        }}
                                                                        type='text'
                                                                        buttonsAlign='before'
                                                                        value={section.title}
                                                                        // onSave={}
                                                                    />
                                                                </div>
                                                            </h4>
                                                            <p>
                                                                <div>
                                                                    <EdiText
                                                                        className={"edit-text"}
                                                                        viewProps={{
                                                                            style: {borderRadius: 10}
                                                                        }}
                                                                        type='text'
                                                                        buttonsAlign='before'
                                                                        value={section.text}
                                                                        // onSave={}
                                                                    />
                                                                </div>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-5 activities mb-5 ">
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="activities-title d-flex align-items-center">
                                    <h3 style={{fontSize: "21px"}}>Cooperation with international organizations</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                                "Cooperation with international organizations",
                                                "CooperationWithInternationalOrganizations",
                                                true, false,
                                                true, false
                                            )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div>
                                    {sections.map((section) => (
                                        section.header === 'CooperationWithInternationalOrganizations'
                                        ? <div className="cooperation-box d-flex align-items-center">'
                                            <GoPrimitiveDot color="#007ced"/>
                                                <IconButton className={"mb-1"}>
                                                    <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                </IconButton>
                                                <h5>
                                                <div>
                                                    <EdiText
                                                        className={"edit-text"}
                                                        viewProps={{
                                                            style: {borderRadius: 10}
                                                        }}
                                                        type='text'
                                                        buttonsAlign='before'
                                                        value={section.title}
                                                        // onSave={}
                                                    />
                                                </div>
                                            </h5>
                                            <h6>
                                                <div>
                                                    <EdiText
                                                        className={"edit-text"}
                                                        viewProps={{
                                                            style: {borderRadius: 10}
                                                        }}
                                                        type='text'
                                                        buttonsAlign='before'
                                                        value={section.text}
                                                        // onSave={}
                                                    />
                                                </div>
                                            </h6>
                                        </div>
                                            : null
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="activities-title d-flex align-items-center">
                                    <h3>Postdoc</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                            "Postdoc",
                                            "Postdoc",
                                            true, false,
                                                true, false
                                        )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                {
                                    sections.map((section) => (
                                        section.header === 'Postdoc'
                                        ?  <div>
                                                <div className="postdoc-box d-flex align-items-center">
                                                    <IconButton className={"mb-1"}>
                                                        <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                    </IconButton>
                                                    <div>
                                                        <h4>
                                                            <div>
                                                                <EdiText
                                                                    className={"edit-text"}
                                                                    viewProps={{
                                                                        style: {borderRadius: 10}
                                                                    }}
                                                                    type='text'
                                                                    buttonsAlign='before'
                                                                    value={section.title}
                                                                    // onSave={}
                                                                />
                                                            </div>
                                                        </h4>
                                                        <p>
                                                            <div>
                                                                <EdiText
                                                                    className={"edit-text"}
                                                                    viewProps={{
                                                                        style: {borderRadius: 10}
                                                                    }}
                                                                    type='text'
                                                                    buttonsAlign='before'
                                                                    value={section.text}
                                                                    // onSave={}
                                                                />
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-5 activities mb-5 row">
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="activities-title d-flex align-items-center">
                                    <h3>In the following journal</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                            "In the following journal",
                                            "InTheFollowingJournal",
                                                true, false,
                                                true, false
                                        )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div>
                                    <h5>Editor-in-Chief:</h5>
                                </div>
                                <div className="teaching-box">
                                    <div className="d-flex align-items-center my-4">
                                        <GoPrimitiveDot color="#007ced"/>
                                        <div className={"d-flex align-items-center"}>
                                            <IconButton className={"mb-1"}>
                                                <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                            </IconButton>
                                            <a href="https://cmcma.sbu.ac.ir/" target="_blank"
                                               style={{fontSize: '13px', textDecoration: "none"}}>Computational Mathematics and
                                                Computer Modeling with
                                                Applications (CMCMA)
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Managing Editor:</h5>
                                    </div>
                                    {
                                        journal1.map((p) => (
                                            <div className="d-flex align-items-center my-4">
                                                <GoPrimitiveDot color="#007ced"/>
                                                <h4 style={{fontSize: '13px'}}>
                                                    <div className={"d-flex align-items-center"}>
                                                        <IconButton className={"mb-1"}>
                                                            <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                        </IconButton>
                                                        <EdiText
                                                            className={"edit-text"}
                                                            viewProps={{
                                                                style: {borderRadius: 10}
                                                            }}
                                                            type='text'
                                                            buttonsAlign='before'
                                                            value={p.title}
                                                            // onSave={}
                                                        />
                                                    </div>
                                                </h4>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 mt-sm-5">
                                <div className="teaching-box mt-sm-5">
                                    {
                                        journal2.map((p) => (
                                            <div className="d-flex align-items-center my-4">
                                                <GoPrimitiveDot color="#007ced"/>
                                                <h4 style={{fontSize: '13px'}}>
                                                    <div className={"d-flex align-items-center"}>
                                                        <IconButton className={"mb-1"}>
                                                            <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                        </IconButton>
                                                        <EdiText
                                                            className={"edit-text"}
                                                            viewProps={{
                                                                style: {borderRadius: 10}
                                                            }}
                                                            type='text'
                                                            buttonsAlign='before'
                                                            value={p.title}
                                                            // onSave={}
                                                        />
                                                    </div>
                                                </h4>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-5 activities mb-5 row">
                    <div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="activities-title d-flex align-items-center">
                                    <h3>Honors and Awards</h3>
                                    <div className={"mb-1"}>
                                        <IconButton onClick={() =>
                                            handleOpenModal(
                                            "Honors and Awards",
                                            "HonorsAndAwards",
                                                true, false,
                                                false, false
                                        )}>
                                            <IoIosAddCircle color={"green"} size={35}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <div className="teaching-box">
                                    {
                                        sections.map((section) => (
                                            section.header === 'HonorsAndAwards'
                                            ? <div className="d-flex align-items-center my-4">
                                                <GoPrimitiveDot color="#007ced"/>
                                                <h4 style={{fontSize: '13px'}}>
                                                    <div className={"d-flex align-items-center"}>
                                                        <IconButton className={"mb-1"}>
                                                            <IoIosRemoveCircle color={"red"} size={35} color={"red"}/>
                                                        </IconButton>
                                                        <EdiText
                                                            className={"edit-text"}
                                                            viewProps={{
                                                                style: {borderRadius: 10}
                                                            }}
                                                            type='text'
                                                            buttonsAlign='before'
                                                            value={section.text}
                                                            // onSave={}
                                                        />
                                                    </div>
                                                </h4>
                                            </div>
                                                : null
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*------------------------------------------Modals------------------------------------------------------*/}
            <CustomModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                sectionName={tempSectionName}
                tempTitle={tempFields.title}
                tempYear={tempFields.year}
                tempText={tempFields.text}
                handleTempValues={handleTempValues}
                handleSubmitModal={handleSubmitModal}
                titleShow={!hiddenItems.titleShow}
                textShow={!hiddenItems.textShow}
                yearShow={!hiddenItems.yearShow}
                imageShow={!hiddenItems.imageShow}
            />

        </>
    )
}

export default EditMainPage;