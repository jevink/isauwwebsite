import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import AboutUs from "./AboutUs";
import OrganizationCard from "./OrganizationCard";

function Officers() {

    const [isSelected, setSelected] = React.useState({
        operations: false,
        finance: false,
        communications: false
    });

    function toggleSelected(event) {
        const eventId = event.currentTarget.id;
        // set everything to false, except the branch that was selected
        setSelected((prevValue) => {
            const newSelected = {
                operations: false,
                finance: false,
                communications: false
            };
            newSelected[eventId] = !prevValue[eventId];
            return newSelected;
        });
    }

    function renderOperationsTree(shouldRender) {
        if (shouldRender) {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.operations} id="operations" hasButton="true" handleClick={toggleSelected} position="Director of Operations" name="Kevin Yip" image="https://picsum.photos/500" />}>
                    <TreeNode label={<OrganizationCard position="Head of Event Organization" name="Nicole Fendi" image="https://picsum.photos/500" />}>
                        <TreeNode label={<OrganizationCard position="Event Organization" name="Michelle Utama" image="https://picsum.photos/500" />}>
                        </TreeNode>
                    </TreeNode>
                    <TreeNode label={<OrganizationCard position="Head of Creativity Management" name="Alyssa Limit" image="https://picsum.photos/500" />}>
                    </TreeNode>
                    <TreeNode label={<OrganizationCard position="Head of Inventory" name="Glenndi Tjuandi" image="https://picsum.photos/500" />}>
                    </TreeNode>
                </TreeNode>
            );
        } else {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.operations} id="operations" hasButton="true" handleClick={toggleSelected} position="Director of Operations" name="Kevin Yip" image="https://picsum.photos/500" />}>
                </TreeNode>
            );
        }
    }

    function renderFinanceTree(shouldRender) {
        if (shouldRender) {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.finance} id="finance" hasButton="true" handleClick={toggleSelected} position="Director of Finance" name="Natasha Valerie" image="https://picsum.photos/500" />}>
                    <TreeNode label={<OrganizationCard position="Head of Sponsorship" name="Nicole Fendi" image="https://picsum.photos/500" />}>
                        <TreeNode label={<OrganizationCard position="Sponsorship" name="Jordan Huang" image="https://picsum.photos/500" />}>
                        </TreeNode>
                    </TreeNode>
                    <TreeNode label={<OrganizationCard position="Head of Treasury" name="Vanessa Sujitro" image="https://picsum.photos/500" />}>
                        <TreeNode label={<OrganizationCard position="Treasury" name="Daven Tejalaksana" image="https://picsum.photos/500" />}>
                        </TreeNode>
                    </TreeNode>
                </TreeNode>
            );
        } else {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.finance} id="finance" hasButton="true" handleClick={toggleSelected} position="Director of Finance" name="Natasha Valerie" image="https://picsum.photos/500" />}>
                </TreeNode>
            );
        }
    }

    function renderCommunicationsTree(shouldRender) {
        if (shouldRender) {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.communications} id="communications" hasButton="true" handleClick={toggleSelected} position="Director of Communications & Outreach" name="Tung Alta Kania" image="https://picsum.photos/500" />}>
                    <TreeNode label={<OrganizationCard position="Head of Marketing Communications" name="Ernesto Giovanni" image="https://picsum.photos/500" />}>
                    </TreeNode>
                    <TreeNode label={<OrganizationCard position="Head of Design and Documentation" name="Andrea Muljono" image="https://picsum.photos/500" />}>
                    </TreeNode>
                    <TreeNode label={<OrganizationCard position="Head of Information Technology" name="Jevin Kosasih" image="https://picsum.photos/500" />}>
                        <TreeNode label={<OrganizationCard position="Information Technology" name="Winston Jodjana" image="https://picsum.photos/500" />}>
                        </TreeNode>
                        <TreeNode label={<OrganizationCard position="Information Technology" name="Ivanna Gwendoline Maxwell" image="https://picsum.photos/500" />}>
                        </TreeNode>
                    </TreeNode>
                </TreeNode>
            );
        } else {
            return (
                <TreeNode label={<OrganizationCard isSelected={isSelected.communications} id="communications" hasButton="true" handleClick={toggleSelected} position="Director of Communications & Outreach" name="Tung Alta Kania" image="https://picsum.photos/500" />}>
                </TreeNode>
            );
        }
    }

    return (
        <div>
            <AboutUs />

            <div className="mx-auto row" style={{ marginBottom: "5rem" }}>
                <h1 className="text-center div-margin-btm"><strong>2021-22 Organization Structure</strong></h1>
                <Tree
                    label={<OrganizationCard position="President" name="Amy Dharmawan" image="https://picsum.photos/500" />}
                    lineHeight={"32px"}
                    lineWidth={"2px"}
                    lineColor={"#811B16"}
                    lineBorderRadius={"10px"}
                >
                    <TreeNode label={<OrganizationCard position="Vice President" name="Jasmine Laksmana" image="https://picsum.photos/500" />}>
                        {renderOperationsTree(isSelected.operations)}
                        {renderFinanceTree(isSelected.finance)}
                        {renderCommunicationsTree(isSelected.communications)}
                    </TreeNode>
                </Tree>
            </div>
        </div>
    );
};

export default Officers;