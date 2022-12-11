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
        picture: {
            name: '',
            fileId: ''
        },
        dateValue: ''
    })

    //headers
    const [sections, setSections] = useState([])

    const {t} = useTranslation();
    const [education, setEducation] = useState([]);
    const [cooperation, setCooperation] = useState([]);
    const [award, setAward] = useState([]);
    const [journal1, setjournal1] = useState([]);
    const [journal2, setjournal2] = useState([]);

    useEffect(() => {
        // let educationList = i18next.t('education',{ returnObjects: true })
        // setEducation(educationList);
        //
        // let cooperationList = i18next.t('cooperation', {returnObjects: true});
        // setCooperation(cooperationList);
        //
        // let journalList1 = i18next.t('journal1', {returnObjects: true});
        // setjournal1(journalList1);
        //
        // let journalList2 = i18next.t('journal2', {returnObjects: true});
        // setjournal2(journalList2);
        //
        // let awardList = i18next.t('award', {returnObjects: true});
        // setAward(awardList);
        fetch('http://localhost:8089/api/v1/public/mainPage').then((response) => response.json())
            .then((data) => setSections(data));
        },[]);

    const handleSubmitModal = async () => {
        await fetch(`http://localhost:8089/api/v1/admin/save/mainPage`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                year: tempFields.year,
                header: tempFields.header,
                title: tempFields.title,
                text: tempFields.text,
                picture: tempFields.picture
            })
        }).then((response) => response.json()).then((data) => {
            let updateSections = [...sections];
            updateSections.push({
                id: data.id,
                year: tempFields.year,
                header: tempFields.header,
                title: tempFields.title,
                text: tempFields.text,
                picture: tempFields.picture
            })

            setSections(updateSections)
        });

        setTempFields({
            year: '',
            header: '',
            title: '',
            text: '',
            picture: {
                name: '',
                fileId: ''
            },
            dateValue: ''
        })
        handleCloseModal();
    }

    const handleDelete = async (section) => {
        console.log(section)
        await fetch(`http://localhost:8089/api/v1/admin/delete/mainPage/${section.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(() => {
            let updateSections = [...sections];
            updateSections = updateSections.filter((s) => s.id !== section.id)

            setSections(updateSections)
        });
    }

    const handlePatch = async (section, value, FieldName) => {
        console.log(value)
        await fetch(`http://localhost:8089/api/v1/admin/patch/mainPage/${section.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                [FieldName]: value
            })
        }).then(() => {
            console.log("Success")
            let updateSections = [...sections];

            for (let i = 0; i < updateSections; i++) {
                if (updateSections[i].id === section.id) {
                    updateSections[i][FieldName] = value
                }
            }

            setSections(updateSections)
        });
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

    const handleDate = (e) => {
        let updatedTempFields = {...tempFields};
        updatedTempFields.year = e.year;

        setTempFields(updatedTempFields);

    }

    return (
        <>

            <div style={{overflowY: "scroll", height: window.innerHeight*0.92, overflowX: "hidden"}}>
                <div
                    className="d-flex justify-content-center align-items-start mt-5 card-contain animate__animated animate__fadeInDown">
                    <div className="mainImgContain">
                        <img src={mainImg} className="mainImg"/>
                    </div>
                    <div className="cv-text mt-4">
                        <h5>Spectral Methods, ODEs, PDEs And Scientific Computing</h5>
                        <h2 className="my-4">{t("title")}</h2>
                        <h6>
                            I am Professor @ Department of Computer and Data Sciences,
                            Faculty of Mathematical Sciences, Shahid Beheshti University
                        </h6>
                        <p>
                            My main research field is Scientific Computing, Spectral Methods, Meshless methods, Ordinary
                            Differential Equations(ODEs), Partial Differential Equations(PDEs),Data Mining,Machine Learning
                            and Computational
                            Neuroscience Modeling.
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
                                                <IconButton onClick={() => handleDelete(section)}>
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
                                                    onSave={(value) => handlePatch(section, value, 'title')}
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
                                                    onSave={(value) => handlePatch(section, value, 'text')}
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
                                                    <IconButton onClick={() => handleDelete(section)}>
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
                                                        onSave={(value) => handlePatch(section, value, 'title')}
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
                                                        onSave={(value) => handlePatch(section, value, 'text')}
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
                                                    <IconButton onClick={() => handleDelete(section)}>
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
                                                                    onSave={(value) => handlePatch(section, value, 'year')}
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
                                                                    onSave={(value) => handlePatch(section, value, 'title')}
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
                                                                onSave={(value) => handlePatch(section, value, 'text')}
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
                                                        <IconButton className={"mb-1"} onClick={() => handleDelete(section)}>
                                                            <IoIosRemoveCircle size={35} color={"red"}/>
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
                                                                        onSave={(value) => handlePatch(section, value, 'title')}
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
                                                                        onSave={(value) => handlePatch(section, value, 'text')}
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
                                        ? <div className="cooperation-box d-flex align-items-center">
                                            <GoPrimitiveDot color="#007ced"/>
                                                <IconButton className={"mb-1"} onClick={() => handleDelete(section)}>
                                                    <IoIosRemoveCircle size={35} color={"red"}/>
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
                                                        onSave={(value) => handlePatch(section, value, 'title')}
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
                                                        onSave={(value) => handlePatch(section, value, 'text')}
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
                                                    <IconButton className={"mb-1"} onClick={() => handleDelete(section)}>
                                                        <IoIosRemoveCircle size={35} color={"red"}/>
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
                                                                    onSave={(value) => handlePatch(section, value, 'title')}
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
                                                                    onSave={(value) => handlePatch(section, value, 'text')}
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
                                {
                                    sections.map((section) => (
                                        section.header === 'InTheFollowingJournal'
                                        ?
                                            <>
                                                <div className={"d-flex align-items-center"}>
                                                    <IconButton className={"mb-1"} onClick={() => handleDelete(section)}>
                                                        <IoIosRemoveCircle color={"red"} size={40}/>
                                                    </IconButton>
                                                    <h5>
                                                        <EdiText
                                                            className={"edit-journal-title edit-text"}
                                                            viewProps={{
                                                                style: {borderRadius: 10}
                                                            }}
                                                            type='text'
                                                            buttonsAlign='before'
                                                            value={section.title}
                                                            onSave={(value) => handlePatch(section, value, 'title')}
                                                        />
                                                    </h5>
                                                </div>
                                                <div className="teaching-box" style={{borderBottom: "solid 1px rgb(42, 153, 255)"}}>
                                                    <div className="d-flex align-items-center my-4">
                                                        <GoPrimitiveDot color="#007ced"/>
                                                        <div className={"d-flex align-items-center"}>
                                                            <h4 style={{fontSize: '13px'}}>
                                                                <div className={"d-flex align-items-center"}>
                                                                    <EdiText
                                                                        className={"edit-text"}
                                                                        viewProps={{
                                                                            style: {borderRadius: 10}
                                                                        }}
                                                                        type='text'
                                                                        buttonsAlign='before'
                                                                        value={section.text}
                                                                        onSave={(value) => handlePatch(section, value, 'text')}
                                                                    />
                                                                </div>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
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
                                                        <IconButton className={"mb-1"} onClick={() => handleDelete(section)}>
                                                            <IoIosRemoveCircle size={35} color={"red"}/>
                                                        </IconButton>
                                                        <EdiText
                                                            className={"edit-text"}
                                                            viewProps={{
                                                                style: {borderRadius: 10}
                                                            }}
                                                            type='text'
                                                            buttonsAlign='before'
                                                            value={section.text}
                                                            onSave={(value) => handlePatch(section, value, 'text')}
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
                tempYear={tempFields.dateValue}
                tmpDateValue={tempFields.dateValue}
                handleDate={handleDate}
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