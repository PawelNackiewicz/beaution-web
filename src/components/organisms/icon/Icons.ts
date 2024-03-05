export type IconName = keyof typeof defaultIcons;

export const defaultIcons = {
	home: "M2.25 16H5.625V10H12.375V16H15.75V7L9 2.5L2.25 7V16ZM2.25 18C1.63125 18 1.10138 17.804 0.660377 17.412C0.219377 17.02 -0.00074809 16.5493 1.91002e-06 16V7C1.91002e-06 6.68333 0.0798767 6.38333 0.239627 6.1C0.399377 5.81667 0.619502 5.58333 0.900002 5.4L7.65 0.9C7.85625 0.766667 8.07187 0.666667 8.29687 0.6C8.52187 0.533333 8.75625 0.5 9 0.5C9.24375 0.5 9.47812 0.533333 9.70312 0.6C9.92812 0.666667 10.1437 0.766667 10.35 0.9L17.1 5.4C17.3812 5.58333 17.6017 5.81667 17.7615 6.1C17.9212 6.38333 18.0007 6.68333 18 7V16C18 16.55 17.7795 17.021 17.3385 17.413C16.8975 17.805 16.368 18.0007 15.75 18H10.125V12H7.875V18H2.25Z",
	person:
		"M9 9C7.7625 9 6.70313 8.55937 5.82188 7.67812C4.94063 6.79687 4.5 5.7375 4.5 4.5C4.5 3.2625 4.94063 2.20313 5.82188 1.32188C6.70313 0.440625 7.7625 0 9 0C10.2375 0 11.2969 0.440625 12.1781 1.32188C13.0594 2.20313 13.5 3.2625 13.5 4.5C13.5 5.7375 13.0594 6.79687 12.1781 7.67812C11.2969 8.55937 10.2375 9 9 9ZM15.75 18H2.25C1.63125 18 1.10138 17.7795 0.660377 17.3385C0.219377 16.8975 -0.00074809 16.368 1.91002e-06 15.75V14.85C1.91002e-06 14.2125 0.164252 13.6264 0.492752 13.0916C0.821252 12.5569 1.257 12.1492 1.8 11.8687C2.9625 11.2875 4.14375 10.8514 5.34375 10.5604C6.54375 10.2694 7.7625 10.1242 9 10.125C10.2375 10.125 11.4562 10.2705 12.6562 10.5615C13.8562 10.8525 15.0375 11.2882 16.2 11.8687C16.7437 12.15 17.1799 12.558 17.5084 13.0927C17.8369 13.6275 18.0007 14.2132 18 14.85V15.75C18 16.3687 17.7795 16.8986 17.3385 17.3396C16.8975 17.7806 16.368 18.0007 15.75 18ZM2.25 15.75H15.75V14.85C15.75 14.6437 15.6982 14.4562 15.5947 14.2875C15.4912 14.1187 15.3555 13.9875 15.1875 13.8937C14.175 13.3875 13.1531 13.008 12.1219 12.7552C11.0906 12.5025 10.05 12.3757 9 12.375C7.95 12.375 6.90938 12.5017 5.87813 12.7552C4.84688 13.0087 3.825 13.3882 2.8125 13.8937C2.64375 13.9875 2.50763 14.1187 2.40413 14.2875C2.30063 14.4562 2.24925 14.6437 2.25 14.85V15.75ZM9 6.75C9.61875 6.75 10.1486 6.5295 10.5896 6.0885C11.0306 5.6475 11.2507 5.118 11.25 4.5C11.25 3.88125 11.0295 3.35137 10.5885 2.91037C10.1475 2.46937 9.618 2.24925 9 2.25C8.38125 2.25 7.85138 2.4705 7.41038 2.9115C6.96938 3.3525 6.74925 3.882 6.75 4.5C6.75 5.11875 6.9705 5.64862 7.4115 6.08962C7.8525 6.53062 8.382 6.75075 9 6.75Z",
	arrowRight:
		"M11.0833 14.3958C10.9166 14.2292 10.8366 14.0278 10.8433 13.7917C10.85 13.5556 10.9369 13.3542 11.1041 13.1875L13.4583 10.8333H4.16665C3.93054 10.8333 3.73248 10.7533 3.57248 10.5933C3.41248 10.4333 3.33276 10.2356 3.33332 10C3.33332 9.76389 3.41332 9.56583 3.57332 9.40583C3.73332 9.24583 3.93109 9.16611 4.16665 9.16667H13.4583L11.0833 6.79167C10.9166 6.625 10.8333 6.42695 10.8333 6.1975C10.8333 5.96806 10.9166 5.77028 11.0833 5.60417C11.25 5.4375 11.448 5.35417 11.6775 5.35417C11.9069 5.35417 12.1047 5.4375 12.2708 5.60417L16.0833 9.41667C16.1666 9.5 16.2258 9.59028 16.2608 9.6875C16.2958 9.78472 16.313 9.88889 16.3125 10C16.3125 10.1111 16.295 10.2153 16.26 10.3125C16.225 10.4097 16.1661 10.5 16.0833 10.5833L12.25 14.4167C12.0972 14.5694 11.9064 14.6458 11.6775 14.6458C11.4486 14.6458 11.2505 14.5625 11.0833 14.3958Z",
	bell: "M10 1.04167C8.50821 1.04167 7.07747 1.6343 6.02257 2.68919C4.96768 3.74408 4.37505 5.17482 4.37505 6.66667C4.37505 9.49125 3.77063 11.2612 3.20136 12.3049C2.91587 12.8283 2.63581 13.1754 2.43695 13.3853C2.33736 13.4904 2.25771 13.5616 2.20736 13.6035C2.18217 13.6245 2.1643 13.6382 2.15491 13.6452L2.14772 13.6504C1.92253 13.8041 1.82271 14.0864 1.90187 14.3478C1.98168 14.6114 2.22463 14.7917 2.50005 14.7917H17.5C17.7755 14.7917 18.0184 14.6114 18.0982 14.3478C18.1774 14.0864 18.0776 13.8041 17.8524 13.6504L17.8452 13.6452C17.8358 13.6382 17.8179 13.6245 17.7927 13.6035C17.7424 13.5616 17.6627 13.4904 17.5631 13.3853C17.3643 13.1754 17.0842 12.8283 16.7987 12.3049C16.2295 11.2612 15.625 9.49125 15.625 6.66667C15.625 5.17482 15.0324 3.74408 13.9775 2.68919C12.9226 1.6343 11.4919 1.04167 10 1.04167ZM16.0919 13.5417H3.90823C4.03613 13.3554 4.16784 13.1434 4.29873 12.9034C4.97947 11.6554 5.62505 9.67542 5.62505 6.66667C5.62505 5.50634 6.08598 4.39355 6.90646 3.57307C7.72693 2.7526 8.83973 2.29167 10 2.29167C11.1604 2.29167 12.2732 2.7526 13.0936 3.57307C13.9141 4.39355 14.375 5.50634 14.375 6.66667C14.375 9.67542 15.0206 11.6554 15.7014 12.9034C15.8323 13.1434 15.964 13.3554 16.0919 13.5417ZM9.09887 17.1864C8.92567 16.8878 8.54322 16.7862 8.24464 16.9594C7.94606 17.1326 7.84442 17.515 8.01762 17.8136C8.21907 18.1609 8.50822 18.4491 8.85611 18.6495C9.20401 18.8499 9.59844 18.9554 9.99992 18.9554C10.4014 18.9554 10.7958 18.8499 11.1437 18.6495C11.4916 18.4491 11.7808 18.1609 11.9822 17.8136C12.1554 17.515 12.0538 17.1326 11.7552 16.9594C11.4566 16.7862 11.0742 16.8878 10.901 17.1864C10.8094 17.3442 10.678 17.4753 10.5198 17.5664C10.3617 17.6574 10.1824 17.7054 9.99992 17.7054C9.81743 17.7054 9.63814 17.6574 9.48001 17.5664C9.32187 17.4753 9.19044 17.3442 9.09887 17.1864Z",
};