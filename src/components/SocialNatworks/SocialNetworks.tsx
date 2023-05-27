import React from "react";
import {DataSocialNetworks} from "../../Utilities/dataSocialNetworks";
import styles from './SocialNetworks.module.scss';
import cl from 'classnames'


interface SocialNetworksProps {
}
export const SocialNetworks: React.FC<SocialNetworksProps> = () => {
    return(
        <ul className={styles.socialNetworks}>
            {DataSocialNetworks.map((DataSocialNetwork) => (
                <li key={DataSocialNetwork.id} >
                    <a  className={cl(styles.socialNetworksLink, styles[`socialNetworks${DataSocialNetwork.name}`])} href={DataSocialNetwork.link} target="_blank" rel="noreferrer">{DataSocialNetwork.name}</a>
                </li>
            ))}
        </ul>
    )
}